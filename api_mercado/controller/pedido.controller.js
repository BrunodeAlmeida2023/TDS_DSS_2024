const conn = require("../mysql-connection");

module.exports = {
    cadastrar: async (req, res) => {
        const { id_cliente, id_produto, quantidade } = req.body;

        try {
            const cliente = await conn.select()
                .from("cliente")
                .where({ id: id_cliente });

            if (cliente.length <= 0) {
                return res.status(400).send({ msg: `O código ${id_cliente} do cliente não existe!` });
            }

            const produto = await conn.select()
                .from("produto")
                .where({ id: id_produto });

            if (produto.length <= 0) {
                return res.status(400).send({ msg: `O código ${id_produto} do não existe!` })
            }

            if (quantidade <= 0) {
                return res.status(309).send({ msg: "A quantidade deve ser maior do que zero!" })
            }

            var total = quantidade * produto[0].preco;

            await conn("pedido").insert({
                id_cliente,
                id_produto,
                quantidade,
                total
            });

            return res.status(200).send({ msg: "Pedido Cadastrado com sucesso!" });
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao cadastrar um pedido!" });
        }
    },
    consultar: async (req, res) => {
        try {

            const data = await conn.select(
                "pedido.id",
                "pedido.id_cliente",
                "cliente.nome as nome_cliente",
                "pedido.id_produto",
                "produto.nome as nome_produto",
                "produto.preco",
                "pedido.quantidade",
                "pedido.total"
            ).from("pedido")
                .join("cliente", "cliente.id", "pedido.id_cliente")
                .join("produto", "produto.id", "pedido.id_produto");

            res.status(200).send(data);

        } catch (error) {
            res.status(500).send({ msg: "Erro ao carregar pedidos" })
        }
    },

    deletar: async (req, res) => {
        const { id } = req.params;
        try {
            await conn("pedido").del().where({ id })
            res.status(200).send({ msg: "Pedido deletado com sucesso" });
        } catch (error) {
            res.status(500).send({ msg: "Erro ao deletar pedido" })
        }
    }
};