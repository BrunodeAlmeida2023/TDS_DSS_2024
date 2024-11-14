const routes = require("express").Router();
const clienteRouter = require("./cliente.router");
const veiculoRouter = require("./veiculo.router");
const pedidoRouter = require("./pedido.router");

routes.use("/cliente", clienteRouter);
routes.use("/veiculo", veiculoRouter);
routes.use("/pedido", pedidoRouter);

module.exports = routes;