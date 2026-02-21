import express from "express"
import FuncionarioControl from "../controllers/FuncionarioController.js"

const FuncionarioController = new FuncionarioControl()
const funcionarioRouter = express.Router()

funcionarioRouter.get('/api/funcionario', FuncionarioController.getAll)

funcionarioRouter.post('/api/funcionario', FuncionarioController.create)

funcionarioRouter.delete('/api/funcionario', FuncionarioController.delete)

export { funcionarioRouter }