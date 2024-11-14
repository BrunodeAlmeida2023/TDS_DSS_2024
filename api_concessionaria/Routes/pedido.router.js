const routes = require("express").Router();
const pedidoController = require("../Controllers/pedido.controller");

routes.post("/cadastrar", pedidoController.cadastrar);
routes.get("/consultar", pedidoController.consultar);
routes.delete("/deletar/:id([0-9]+)", pedidoController.deletar);

module.exports = routes;