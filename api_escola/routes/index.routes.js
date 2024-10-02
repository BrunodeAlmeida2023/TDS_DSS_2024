const express = require('express');
const routes = express.Router();
const AlunoRouter = require('./aluno.router')
const ProfessorRouter = require('./professor.router')
const TurmaRouter = require('./turma.router')
const MatriculaRouter = require('./matricula.router')

routes.use("/aluno", AlunoRouter)
routes.use("/professor", ProfessorRouter)
routes.use("/turma", TurmaRouter)
routes.use("/matricula", MatriculaRouter)


module.exports = routes;