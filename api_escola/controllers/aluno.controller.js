
const Alunos = [];

let O = 1;

module.exports = ({
    cadastro: (request, response) => {
        const {
            nome, email, senha, ra
        } = request.body

        const Aluno = {
            nome, email, ra, id: O
        }

        if (!nome) {
            response.status(400).send("NOME NAO INFORMADO!")
        } else if (!email) {
            response.status(400).send("EMAIL NAO INFORMADO!")
        } else if (!senha) {
            response.status(400).send("SENHA NAO INFORMADO!")
        } else if (!ra) {
            response.status(400).send("RA NAO INFORMADO!")
        } else {
            const EmailCompara = Alunos.filter((e) => email == e.email)
            const raCompara = Alunos.filter((c) => ra == c.ra)

            if (EmailCompara.length == 0 && raCompara.length == 0) {
                Aluno.id = O++
                Alunos.push(Aluno)
            } else {
                response.send("Email ou ra já em uso!")
            }
        }

        response.status(200).send("Cadastrado com sucesso")
    },
    consultAll: (request, response) => {
        response.status(200).send(Alunos)
    },
    consultEach: (request, response) => {
        const GiveIdCon = Alunos.find(Aluno => Aluno.id == request.params.id)
        if (GiveIdCon) {
            response.status(200).send(GiveIdCon)
        } else {
            response.status(200).send("Id não localizado no banco!")
        }
    },
    deleteEach: (request, response) => {
        const GiveId = Alunos.findIndex(Aluno => Aluno.id == request.params.id)

        if(GiveId !== -1){
            Alunos.splice(GiveId, 1)
            response.status(200).send("Aluno deletado")
        }else{
            response.status(404).send("Aluno inexistente")
        }
    }
})