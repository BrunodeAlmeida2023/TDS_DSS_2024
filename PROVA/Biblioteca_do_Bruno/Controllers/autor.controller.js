const conn = require("../mysql-connection");

module.exports = ({
    cadastro: (req, res) => {
        const { nome, nacionalidade } = req.body;

        if (!nome) {
            return res.status(309).send({ msg: "O campo de nome é obrigatorio!!" });
        }

        var checkNacionalidade = ``;

        if (!nacionalidade) {
            checkNacionalidade = `INSERT INTO AUTORES(nome, 
            nacionalidade) VALUES('${nome}',null)`
        } else {
            checkNacionalidade = `INSERT INTO AUTORES(nome, 
            nacionalidade) VALUES('${nome}','${nacionalidade}')`
        }   

        conn.raw(checkNacionalidade)
            .then((data) => {
                res.status(200).send({ msg: "Autor cadastrado com sucesso!" });
            })
            .catch((error) => {
                res.status(500).send("Erro ao cadastrar um autor!");
            });

    },
    consultar: (req, res) => {
        conn.raw("SELECT * FROM AUTORES").then((data) => {
            res.status(200).send(data[0]);
        }).catch((erro) => {
            console.log(erro);
            res.status(500).send("Erro ao consultar os AUTORES!");
        });
    },
    atualizar: (req, res) => {
        const { id, nome, nacionalidade } = req.body;

        conn.raw(`UPDATE AUTORES SET nome='${nome}', 
            nacionalidade='${nacionalidade}' WHERE id = ${id}`)
            .then((data) => {
                console.log(data);
                res.status(200).send({ msg: "Autor atualizado com sucesso!" })
            }).catch((error) => {
                console.log(error);
                res.status(500).send({ msg: "Erro ao atualizar o Autor!" });
            });
    },
    deletar: (req, res) => {
        const { id } = req.params;

        conn.raw(`DELETE FROM AUTORES WHERE ID = ${id}`).then((data) => {
            console.log(data[0].affectedRows);

            if (data[0].affectedRows == 0) {
                return res.status(404).send({ msg: "Nenhum autor encontrado com esse id!" });
            } else {
                return res.status(200).send({ msg: "Autor deletado com sucesso!" });
            }

        }).catch((error) => {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao deletar o Autor!" });
        });
    },
    buscaPorId: (req, res) => {
        const { id } = req.params;

        conn.raw(`SELECT * FROM AUTORES WHERE id = ${id}`).then((data) => {
            console.log(data);
            res.status(200).send(data[0]);
        }).catch((error) => {
            console.log(error);
            res.status(500).send("Erro ao consultar o autor!");
        });

    }
})