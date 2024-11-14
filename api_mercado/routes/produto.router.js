const routes = require("express").Router();
const produtoController = require("../controllers/produto.controller");

routes.post("/cadastrar", produtoController.cadastro);
routes.get("/consultar", produtoController.consultar);
routes.get("/consultar/:id([0-9]+)", produtoController.buscaPorId);
routes.put("/atualizar/:id([0-9]+)", produtoController.atualizar);
routes.delete("/deletar/:id([0-9]+)", produtoController.deletar);

module.exports = routes;