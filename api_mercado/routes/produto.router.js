const routes = require("express").Router();
const produtoController = require("../controllers/produto.controller");


routes.post("/", produtoController.cadastro);
routes.get("/", produtoController.consultar);
routes.get("/:id([0-9]+)", produtoController.buscaPorId);
routes.put("/:id([0-9]+)", produtoController.atualizar);
routes.delete("/:id([0-9]+)", produtoController.deletar);
