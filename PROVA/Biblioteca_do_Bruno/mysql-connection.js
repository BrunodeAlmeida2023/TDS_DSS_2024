const knex = require("knex");

module.exports = knex({
    client: "mysql2",
    connection: {
        host: "localhost",
        port: 3306,
        user: "root",
        password: "1571410",
        database: "biblioteca"
    }
});