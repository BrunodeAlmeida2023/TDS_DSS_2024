const routes = require("express").Router();
const clienteController = require("../controllers/cliente.controller")

routes.post("/", clienteController.cadastro)
routes.get("/", clienteController.consultar)