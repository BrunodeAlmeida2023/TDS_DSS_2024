
const Professor = [];

let O = 1;

module.exports = ({
    cadastro: (request, response) => {
        const {
            nome, email, cpf
        } = request.body

        const Prof = {
            nome, email, cpf, id: O
        }

        if (!nome) {
            response.status(400).send("NOME NAO INFORMADO!")
        } else if (!email) {
            response.status(400).send("EMAIL NAO INFORMADO!")
        } else if (!cpf) {
            response.status(400).send("CPF NAO INFORMADO!")
        } else {
            const EmailCompara = Professor.filter((e) => email == e.email)
            const CpfCompara = Professor.filter((c) => cpf == c.cpf)

            if (EmailCompara.length == 0 && CpfCompara.length == 0) {
                Prof.id = O++
                Professor.push(Prof)
            } else {
                response.send("Email ou cpf já em uso!")
            }
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