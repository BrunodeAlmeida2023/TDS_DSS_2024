const routes = require("express").Router();
const pedidoController = require("../controller/pedido.controller");


//CRUD
routes.post("/", pedidoController.cadastrar);
routes.get("/", pedidoController.consultar);
routes.put("/:id([0-9]+)", () => { });
routes.delete("/:id([0-9]+)", pedidoController.deletar);

module.exports = routes;