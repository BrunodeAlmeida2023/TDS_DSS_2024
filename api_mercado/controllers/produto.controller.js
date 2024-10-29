const conn = require("../mysql-connection");

// CRUD
module.exports = {
    cadastro: (req, res) => { 
        const { nome, quantidade } = req.body;

        var comando = ``;

        if (!quantidade && !nome) {
            comando = `INSERT INTO CLIENTE(nome, 
            quantidade) VALUES(null,null)`
        } else {
            comando = `INSERT INTO CLIENTE(nome, 
            quantidade) VALUES('${nome}','${quantidade}')`
        }

        conn.raw(comando)
            .then((data) => {
                res.status(200).send({ msg: "Produto cadastrado com sucesso!" });
            })
            .catch((error) => {
                res.status(500).send("Erro ao cadastrar um Produto!");
            });

    },
    consultar: async (req, res) => {

        try {
            const data = await conn.raw("SELECT * FROM PRODUTO");
            return res.send(data[0]);
        } catch (error) {
            console.log(error);
            return res.status(500).send({ msg: "erro ao consultar os produtos!" });
        }
    },
    atualizar: (req, res) => { },
    deletar: (req, res) => { }
}