const express = require('express');
const routes = express.Router();
const TurmaController = require('../controllers/turma.controller')

routes.post("/cadastro", TurmaController.cadastro)
routes.get("/consulta", TurmaController.consultAll)
routes.get("/consulta/each/:id", TurmaController.consultEach)
routes.delete("/delete/each/:id", TurmaController.deleteEach)

module.exports = routes;
