const express = require('express');
const routes = express.Router();
const MatriculaControler = require('../controllers/matricula.controller');
const matriculaController = require('../controllers/matricula.controller');

routes.post("/cadastro/:id/:id/:id", matriculaController.cadastro)
routes.get("/consulta", matriculaController.consultAll)
routes.get("/consulta/each/:id", matriculaController.consultEach)
routes.delete("/delete/each/:id", matriculaController.deleteEach)

module.exports = routes;
