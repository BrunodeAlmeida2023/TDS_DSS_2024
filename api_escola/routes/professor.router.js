const express = require('express');
const routes = express.Router();
const ProfessorController = require('../controllers/professor.controller')

routes.post("/cadastro", ProfessorController.cadastro)
routes.get("/consulta", ProfessorController.consultAll)
routes.get("/consulta/each/:id", ProfessorController.consultEach)
routes.delete("/delete/each/:id", ProfessorController.deleteEach)

module.exports = routes;
