const conn = require("../mysql-connection");

module.exports = ({
    cadastro: (req, res) => {
        const { clienteId, produtoId, quantidade, data } = req.body;

        const comando = `INSERT INTO PEDIDO(cliente_id, produto_id, quantidade, data) 
                         VALUES(${clienteId}, ${produtoId}, ${quantidade}, '${data}')`;

        conn.raw(comando)
            .then(() => {
                res.status(200).send({ msg: "Pedido cadastrado com sucesso!" });
            })
            .catch((error) => {
                console.log(error);
                res.status(500).send("Erro ao cadastrar o pedido!");
            });
    },
    consultar: (req, res) => {
        conn.raw("SELECT * FROM PEDIDO")
            .then((data) => {
                res.status(200).send(data[0]);
            })
            .catch((error) => {
                console.log(error);
                res.status(500).send("Erro ao consultar os pedidos!");
            });
    },
    atualizar: (req, res) => {
        const { id, clienteId, produtoId, quantidade, data } = req.body;

        const comando = `UPDATE PEDIDO SET cliente_id=${clienteId}, 
                        produto_id=${produtoId}, 
                        quantidade=${quantidade}, 
                        data='${data}' 
                        WHERE id = ${id}`;

        conn.raw(comando)
            .then(() => {
                res.status(200).send({ msg: "Pedido atualizado com sucesso!" });
            })
            .catch((error) => {
                console.log(error);
                res.status(500).send({ msg: "Erro ao atualizar o pedido!" });
            });
    },
    deletar: (req, res) => {
        const { id } = req.params;

        conn.raw(`DELETE FROM PEDIDO WHERE ID = ${id}`)
            .then((data) => {
                if (data[0].affectedRows === 0) {
                    return res.status(404).send({ msg: "Nenhum pedido encontrado com esse código!" });
                } else {
                    return res.status(200).send({ msg: "Pedido deletado com sucesso!" });
                }
            })
            .catch((error) => {
                console.log(error);
                return res.status(500).send({ msg: "Erro ao deletar o pedido!" });
            });
    },
    buscaPorId: (req, res) => {
        const { id } = req.params;

        conn.raw(`SELECT * FROM PEDIDO WHERE id = ${id}`)
            .then((data) => {
                if (data[0].length === 0) {
                    return res.status(404).send({ msg: "Pedido não encontrado!" });
                }
                res.status(200).send(data[0]);
            })
            .catch((error) => {
                console.log(error);
                res.status(500).send("Erro ao consultar o pedido!");
            });
    }
});
