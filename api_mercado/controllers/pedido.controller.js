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
    }
};