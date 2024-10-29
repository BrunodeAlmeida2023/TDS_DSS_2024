const routes = require("express").Router();
const clienteController = require("../controllers/pedido.controller");

routes.post("/", clienteController.cadastro);
routes.get("/", clienteController.consultar);
routes.get("/:id([0-9]+", clienteController.buscaPorId);
routes.put("/:id([0-9]+)", clienteController.atualizar);
routes.delete("/:id([0-9]+)", clienteController.deletar);

module.exports = routes;