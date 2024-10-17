const express = require("express");
const bodyParser = require("body-parser");
const conn = require("../mysql-connection");
// const indexRoutes = require("../routes/index.routes")

const app = express();

app.use(bodyParser.json());

// app.use(indexRoutes);

conn.raw("SELECT 1").then(() => {
    console.log("BANCO DE DADOS CONECTADO!");

    app.listen(3030, () => {
        console.log("ESTA RODANDO PAI!")
    })

}).catch((Error) => {
    console.log("ERRO AO CONECTAR" + Error)
})
