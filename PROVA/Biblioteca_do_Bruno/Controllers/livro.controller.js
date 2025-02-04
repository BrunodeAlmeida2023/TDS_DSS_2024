const conn = require("../mysql-connection");

module.exports = ({
    cadastro: (req, res) => {
        const { titulo, id_autor, genero } = req.body;

        if (!titulo) {
            return res.status(309).send({ msg: "O campo de titulo é obrigatorio!!" });
        }

        var checkGenero = ``;

        if (!genero) {
            checkGenero = `INSERT INTO LIVROS(titulo, id_autor, 
            genero) VALUES('${titulo}',${id_autor},null)`
        } else {
            checkGenero = `INSERT INTO LIVROS(titulo, id_autor,
            genero) VALUES('${titulo}',${id_autor},'${genero}')`
        }   

        conn.raw(checkGenero)
            .then((data) => {
                res.status(200).send({ msg: "Livro cadastrado com sucesso!" });
            })
            .catch((error) => {
                res.status(500).send("Erro ao cadastrar um livro!");
            });

    },
    consultar: (req, res) => {
        conn.raw("SELECT * FROM LIVROS").then((data) => {
            res.status(200).send(data[0]);
        }).catch((erro) => {
            console.log(erro);
            res.status(500).send("Erro ao consultar os LIVROS!");
        });
    },
    atualizar: (req, res) => {
        const { id, titulo, id_autor, genero } = req.body;

        conn.raw(`UPDATE LIVROS SET titulo='${titulo}', id_autor='${id_autor}',
            genero='${genero}' WHERE id = ${id}`)
            .then((data) => {
                console.log(data);
                res.status(200).send({ msg: "LIVROS atualizado com sucesso!" })
            }).catch((error) => {
                console.log(error);
                res.status(500).send({ msg: "Erro ao atualizar o LIVROS!" });
            });
    },
    deletar: (req, res) => {
        const { id } = req.params;

        conn.raw(`DELETE FROM LIVROS WHERE ID = ${id}`).then((data) => {
            console.log(data[0].affectedRows);

            if (data[0].affectedRows == 0) {
                return res.status(404).send({ msg: "Nenhum LIVROS encontrado com esse id!" });
            } else {
                return res.status(200).send({ msg: "LIVROS deletado com sucesso!" });
            }

        }).catch((error) => {
            console.log(error);
            return res.status(500).send({ msg: "Erro ao deletar o LIVROS!" });
        });
    },
    buscaPorId: (req, res) => {
        const { id } = req.params;

        conn.raw(`SELECT * FROM LIVROS WHERE id = ${id}`).then((data) => {
            console.log(data);
            res.status(200).send(data[0]);
        }).catch((error) => {
            console.log(error);
            res.status(500).send("Erro ao consultar o LIVROS!");
        });

    }
})