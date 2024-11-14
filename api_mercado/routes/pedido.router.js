const routes = require("express").Router();
const pedidoController = require("../controllers/pedido.controller");


routes.post("/cadastrar", pedidoController.cadastrar);
routes.get("/consultar", () => { });
routes.put("/consultar/:id([0-9]+)", () => { });
routes.delete("/deletar/:id([0-9]+)", () => { });

module.exports = routes;