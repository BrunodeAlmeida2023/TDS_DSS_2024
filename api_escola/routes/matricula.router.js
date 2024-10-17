const express = require('express');
const routes = express.Router();
const matriculaController = require('../controllers/matricula.controller');

routes.post("/cadastro", matriculaController.cadastro)
routes.get("/consulta", matriculaController.consultAll)
routes.get("/consulta/each/:id", matriculaController.consultEach)
routes.delete("/delete/each/:id", matriculaController.deleteEach)

module.exports = routes;
