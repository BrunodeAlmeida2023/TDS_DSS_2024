
const Turmas = [];

let O = 1;

module.exports = ({
    cadastro: (request, response) => {
        const {
            nome, serie, ano
        } = request.body

        const Turma = {
            nome, serie, ano, id: O
        }

        if (!nome) {
            response.status(400).send("NOME NAO INFORMADO!")
        } else if (!serie) {
            response.status(400).send("EMAIL NAO INFORMADO!")
        } else if (!ano) {
            response.status(400).send("SENHA NAO INFORMADO!")
        } else {
            const nomeCompara = Turmas.filter((e) => nome == e.nome)
            const serieCompara = Turmas.filter((c) => serie == c.serie)
            const anoCompara = Turmas.filter((c) => serie == c.serie)

            if (nomeCompara.length == 0 && serieCompara.length == 0 && anoCompara.length == 0) {
                Turma.id = O++
                Turmas.push(Turma)
            } else {
                response.send("Alguma das informações já está em uso")
            }
        }

        response.status(200).send("Cadastrado com sucesso")
    },
    consultAll: (request, response) => {
        response.status(200).send(Turmas)
    },
    consultEach: (request, response) => {
        const GiveIdCon = Turmas.find(Turma => Turma.id == request.params.id)
        if (GiveIdCon) {
            response.status(200).send(GiveIdCon)
        } else {
            response.status(200).send("Turma inexistente!")
        }
    },
    deleteEach: (request, response) => {
        const GiveId = Turmas.findIndex(Turma => Turma.id == request.params.id)

        
        if(GiveId !== -1){
            Turmas.splice(GiveId, 1)
            response.status(200).send("Turma deletada")
        }else{
            response.status(404).send("Turma inexistente")
        }
    }
})