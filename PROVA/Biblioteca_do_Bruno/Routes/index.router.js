const routes = require("express").Router();
const livroRouter = require("./livro.router");
const autorRouter = require("./autor.router");

routes.use("/livro", livroRouter);
routes.use("/autor", autorRouter);

module.exports = routes;