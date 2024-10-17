const bodyParser = require("body-parser");
const express = require("express");
const indexRoutes = require("./routes/index.routes")
const app = express();

app.use(bodyParser.json());

app.use("/escola", indexRoutes)

app.listen(8080, () => {
    console.log("O servidor esta rodando na porta 8080!")
});
