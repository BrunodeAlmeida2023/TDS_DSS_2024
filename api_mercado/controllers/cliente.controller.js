const conn = require("../mysql-connection");

// CRUD
module.exports = {
cadastro: (req, res) => {
    const clientes = req.body;

    if (!Array.isArray(clientes)) {
        return res.status(400).send({ msg: "O corpo da requisição deve ser um array de clientes." });
    }

    const clientesComErros = clientes.filter(cliente => !cliente.nome);

    if (clientesComErros.length > 0) {
        return res.status(400).send({ msg: "Todos os clientes devem ter o campo nome preenchido." });
    }

    // Inserir todos os clientes de uma vez
    conn('CLIENTE')
        .insert(clientes.map(cliente => ({
            nome: cliente.nome,
            telefone: cliente.telefone || null
        })))
        .then(() => {
            res.status(200).send({ msg: "Clientes cadastrados com sucesso!" });
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send("Erro ao cadastrar os clientes!");
        });
},
    consultar: (req, res) => {
        conn('CLIENTE')
            .select('*')
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send("Erro ao consultar os clientes!");
            });
    },

    atualizar: (req, res) => {
        const { id, nome, telefone, status } = req.body;

        if (!id) {
            return res.status(400).send({ msg: "O campo id é obrigatório para atualizar o cliente!" });
        }

        conn('CLIENTE')
            .where({ id })
            .update({ nome, telefone, status })
            .then((rowsAffected) => {
                if (rowsAffected === 0) {
                    return res.status(404).send({ msg: "Nenhum cliente encontrado com esse código!" });
                }
                res.status(200).send({ msg: "Cliente atualizado com sucesso!" });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send({ msg: "Erro ao atualizar o cliente!" });
            });
    },

    deletar: (req, res) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({ msg: "O campo id é obrigatório para deletar o cliente!" });
        }

        conn('CLIENTE')
            .where({ id })
            .del()
            .then((rowsAffected) => {
                if (rowsAffected === 0) {
                    return res.status(404).send({ msg: "Nenhum cliente encontrado com esse código!" });
                }
                res.status(200).send({ msg: "Cliente deletado com sucesso!" });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send({ msg: "Erro ao deletar o cliente!" });
            });
    },

    buscaPorId: (req, res) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({ msg: "O campo id é obrigatório para buscar o cliente!" });
        }

        conn('CLIENTE')
            .where({ id })
            .select('*')
            .then((data) => {
                if (data.length === 0) {
                    return res.status(404).send({ msg: "Nenhum cliente encontrado com esse código!" });
                }
                res.status(200).send(data[0]);
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send("Erro ao consultar o cliente!");
            });
    }
};
