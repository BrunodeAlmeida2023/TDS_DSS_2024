
const Professor = [];

let O = 1;

module.exports = ({
    cadastro: (request, response) => {
        const {
            desc
        } = request.body

        const Prof = {
            desc, id: O
        }

        if (!desc) {
            response.status(400).send("DESC NAO INFORMADA!")
        } else{
            Prof.id = O++
            Professor.push(Prof)
        }

        response.status(200).send("Cadastrado com sucesso")
    },
    consultAll: (request, response) => {
        response.status(200).send(Professor)
    },
    consultEach: (request, response) => {
        const GiveIdCon = Professor.find(Prof => Prof.id == request.params.id)
        if (GiveIdCon) {
            response.status(200).send(GiveIdCon)
        } else {
            response.status(200).send("Professor inexistente!")
        }
    },
    deleteEach: (request, response) => {
        const GiveId = Professor.findIndex(Prof => Prof.id == request.params.id)

        if(GiveId !== -1){
            Professor.splice(GiveId, 1)
            response.status(200).send("Professor deletado")
        }else{
            response.status(404).send("Professor inexistente")
        }
    }
})