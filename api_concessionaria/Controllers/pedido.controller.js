const conn = require("../mysql-connection");

module.exports = {
    cadastrar: (req, res) => {
        const { cliente_id, veiculo_id, descricao } = req.body;

        if (!cliente_id || !veiculo_id || !descricao) {
            return res.status(400).send({ msg: "Os campos cliente_id, veiculo_id e descricao são obrigatórios para cadastrar um pedido!" });
        }

        conn('PEDIDO')
            .insert({
                cliente_id: cliente_id,
                veiculo_id: veiculo_id,
                descricao: descricao,
                data_pedido: new Date(),
                status: 'pendente'
            })
            .then(() => {
                res.status(200).send({ msg: "Pedido cadastrado com sucesso!" });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send("Erro ao cadastrar o pedido!");
            });
    },

    consultar: (req, res) => {
        conn('PEDIDO')
            .select('PEDIDO.*', 'CLIENTE.nome as nome_cliente', 'VEICULO.modelo as modelo_veiculo')
            .join('CLIENTE', 'PEDIDO.cliente_id', '=', 'CLIENTE.id')
            .join('VEICULO', 'PEDIDO.veiculo_id', '=', 'VEICULO.id')
            .then((data) => {
                res.status(200).send(data);
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send("Erro ao consultar os pedidos!");
            });
    },

    atualizar: (req, res) => {
        const { id, status } = req.body;

        if (!id) {
            return res.status(400).send({ msg: "O campo id é obrigatório para atualizar o pedido!" });
        }

        conn('PEDIDO')
            .where({ id })
            .update({ status })
            .then((rowsAffected) => {
                if (rowsAffected === 0) {
                    return res.status(404).send({ msg: "Nenhum pedido encontrado com esse código!" });
                }
                res.status(200).send({ msg: "Pedido atualizado com sucesso!" });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send("Erro ao atualizar o pedido!");
            });
    },

    deletar: (req, res) => {
        const { id } = req.params;

        if (!id) {
            return res.status(400).send({ msg: "O campo id é obrigatório para deletar o pedido!" });
        }

        conn('PEDIDO')
            .where({ id })
            .del()
            .then((rowsAffected) => {
                if (rowsAffected === 0) {
                    return res.status(404).send({ msg: "Nenhum pedido encontrado com esse código!" });
                }
                res.status(200).send({ msg: "Pedido deletado com sucesso!" });
            })
            .catch((error) => {
                console.error(error);
                res.status(500).send("Erro ao deletar o pedido!");
            });
    }
};
