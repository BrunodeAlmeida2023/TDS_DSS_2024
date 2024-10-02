const express = require('express');
const routes = express.Router();
const AlunoController = require('../controllers/aluno.controller')

routes.post("/cadastro", AlunoController.cadastro)
routes.get("/consulta", AlunoController.consultAll)
routes.get("/consulta/each/:id", AlunoController.consultEach)
routes.delete("/delete/each/:id", AlunoController.deleteEach)

module.exports = routes;
