const routes = require("express").Router();
const veiculoController = require("../controllers/veiculo.controller");

routes.post("/cadastrar", veiculoController.cadastrar);
routes.get("/consultar", veiculoController.consultar);
routes.get("/consultar/:id([0-9]+)", veiculoController.consultarPorId);
routes.delete("/deletar/:id([0-9]+)", veiculoController.deletar);

module.exports = routes;