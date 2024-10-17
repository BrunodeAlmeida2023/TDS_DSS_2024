const alunoController = require("./aluno.controller");

const Matriculas = [];

let O = 1;

module.exports = ({
    cadastro: (request, response) => {
        const {
            desc, AlunoId, TurmaId
        } = request.body

        const Matri = {
            desc, AlunoId, TurmaId, id: O
        }

        if (!desc) {
            response.status(400).send("DESC NAO INFORMADA!")
        } else if(!AlunoId && !TurmaId ){
            response.status(400).send("Id do aluno e da turma são obrigados para efetuar a matricula!")
        } 
        else{
            Matri.id = O++
            Matriculas.push(Matri)
        }

        response.status(200).send("Cadastrado com sucesso")
    },
    consultAll: (request, response) => {
        response.status(200).send(Matriculas)
    },
    consultEach: (request, response) => {
        const GiveIdCon = Matriculas.find(Matri => Matri.id == request.params.id)
        if (GiveIdCon && Matri.id > 0) {
            response.status(200).send(GiveIdCon)
        } else {
            response.status(200).send("Id não localizado no banco")
        }
    },
    deleteEach: (request, response) => {
        const GiveId = Matriculas.findIndex(Matri => Matri.id == request.params.id)

        if(GiveId !== -1){
            Matriculas.splice(GiveId, 1)
            response.status(200).send("Matricula deletada")
        }else{
            response.status(404).send("Matricula inexistente")
        }
    }
})