const routes = require("express").Router();
const autorController = require("../Controllers/autor.controller");

routes.post("/cadastro", autorController.cadastro);
routes.get("/consulta", autorController.consultar);
routes.get("/consulta/:id([0-9]+)", autorController.buscaPorId);
routes.put("/atualizar", autorController.atualizar);
routes.delete("/deletar/:id([0-9]+)", autorController.deletar);

module.exports = routes;