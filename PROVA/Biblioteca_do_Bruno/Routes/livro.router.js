const routes = require("express").Router();
const livroController = require("../Controllers/livro.controller");

routes.post("/cadastro", livroController.cadastro);
routes.get("/consulta", livroController.consultar);
routes.get("/consulta/:id([0-9]+)", livroController.buscaPorId);
routes.put("/atualizar", livroController.atualizar);
routes.delete("/deletar/:id([0-9]+)", livroController.deletar);

module.exports = routes;