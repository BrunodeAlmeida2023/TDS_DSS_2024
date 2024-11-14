const routes = require("express").Router();
const clienteController = require("../Controllers/cliente.controller");

routes.post("/cadastrar", clienteController.cadastrar);
routes.get("/consultar", clienteController.consultar);
routes.get("/consultar/:id([0-9]+)", clienteController.consultarPorId);
routes.put("/atualizar", clienteController.atualizar);

module.exports = routes;
