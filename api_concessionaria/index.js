const express = require("express");
const conn = require("./mysql-connection"); 
const indexRoutes = require("./routes/index.routes"); 

const app = express();

app.use(express.json());

app.use(indexRoutes);

conn.raw("SELECT 1").then(() => {
    console.log("BANCO DE DADOS CONECTADO!");

    app.listen(8080, () => {
        console.log("ESTÁ RODANDO PAI!");
    });
}).catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error.message);
});
