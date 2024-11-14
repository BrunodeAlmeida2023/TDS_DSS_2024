const conn = require("../mysql-connection");

module.exports = {
    cadastrar: (req, res) => {
        const veiculos = req.body;

        if (!Array.isArray(veiculos)) {
            return res.status(400).send({ msg: "O corpo da requisição deve ser um array de veiculos." });
        }

        const veiculosComErros = veiculos.filter(veiculo => !veiculo.modelo || !veiculo.marca || !veiculo.preco);

        if (veiculosComErros.length > 0) {
            return res.status(400).send({ msg: "Todos os veículos devem ter os campos modelo, marca e preço preenchidos." });
        }

        conn('VEICULO')
            .insert(veiculos.map(veiculo => ({
                modelo: veiculo.modelo,
                marca: veiculo.marca,
                ano: veiculo.ano || null,
                preco: veiculo.preco
            })))
            .then(() => {
                res.status(200).send({ msg: "Veículos cadastrados com sucesso!" });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send("Erro ao cadastrar os veículos!");
            });
    },

    consultar: (req, res) => {
        conn('VEICULO')
            .select('*')
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send("Erro ao consultar os veículos!");
            });
    },

    consultarPorId: (req, res) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({ msg: "O campo id é obrigatório para buscar o veículo!" });
        }

        conn('VEICULO')
            .where({ id })
            .select('*')
            .then((data) => {
                if (data.length === 0) {
                    return res.status(404).send({ msg: "Nenhum veículo encontrado com esse código!" });
                }
                res.status(200).send(data[0]);
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send("Erro ao consultar o veículo!");
            });
    },

    deletar: (req, res) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({ msg: "O campo id é obrigatório para deletar o veículo!" });
        }

        conn('VEICULO')
            .where({ id })
            .del()
            .then((rowsAffected) => {
                if (rowsAffected === 0) {
                    return res.status(404).send({ msg: "Nenhum veículo encontrado com esse código!" });
                }
                res.status(200).send({ msg: "Veículo deletado com sucesso!" });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send("Erro ao deletar o veículo!");
            });
    }
};
