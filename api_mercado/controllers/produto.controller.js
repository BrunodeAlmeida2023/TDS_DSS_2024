const conn = require("../mysql-connection");

// CRUD
module.exports = {
    cadastro: async (req, res) => {
        const { nome, preco } = req.body;

        if (!nome) {
            return res.status(309).send({ msg: "O campo nome é obrigatorio!" });
        }

        if (!preco) {
            return res.status(309).send({ msg: "O campo preco é obrigatorio!" });
        }


        try {
            const produto = await conn("produto").insert({ nome, preco });

            return res.status(200).send({
                id: produto[0],
                nome,
                preco,
                status: 1
            });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao cadastrar o produto!" });
        }


    },
    consultar: async (req, res) => {
        try {
            const data = await conn.select().from("produto");
            return res.status(200).send(data);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao consultar produtos!" });
        }
    },
    atualizar: async (req, res) => {
        const { nome, preco, status } = req.body;
        const { id } = req.params;

        try {
            const produto = await conn.select().from("produto").where({ id });

            if (produto.length <= 0) {
                return res.status(404).send({ msg: `O código ${id} não existe!` })
            }

            await conn("produto").update({
                nome,
                preco,
                status
            }).where({ id });

            // UPDATE PRODUTO SET (NOME, PRECO, STATUS) VALUES("PASTEL", 1, true);

            return res.status(200).send({
                id: produto[0].id,
                nome,
                preco,
                status
            });

        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao atualizar o produto" });
        }

    },
    deletar: async (req, res) => {
        const { id } = req.params;

        try {
            await conn("produto").where({ id }).del();
            return res.status(200).send({ msg: "Produto excluido com sucesso!" });
        } catch (error) {
            console.log(error);
            res.status(500).send({ msg: "Erro ao deletar o pedido!" });
        }
    },
    buscaPorId: async (req, res) => {
        const { id } = req.params;

        try {
            const produto = await conn.select().from("produto").where({ id });
            return res.status(200).send(produto);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "erro ao consultar produto!" });
        }
    }
}