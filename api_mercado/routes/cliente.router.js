const routes = require("express").Router();
const clienteController = require("../controllers/cliente.controller");

routes.post("/cadastrar", clienteController.cadastro);
routes.get("/consultar", clienteController.consultar);
routes.get("/consultar/:id([0-9]+)", clienteController.buscaPorId);
routes.put("/atualizar", clienteController.atualizar);
routes.delete("/deletar/:id([0-9]+)", clienteController.deletar);

module.exports = routes;