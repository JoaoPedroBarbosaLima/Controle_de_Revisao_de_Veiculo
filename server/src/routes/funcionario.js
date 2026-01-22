import express from "express"
import FuncionarioControl from "../controllers/FuncionarioController.js"

const FuncionarioController = new FuncionarioControl()
const funcionarioRouter = express.Router()

funcionarioRouter.get('/api/funcionarios', FuncionarioController.getAll)

funcionarioRouter.post('/api/funcionarios', FuncionarioController.create)

funcionarioRouter.delete('/api/funcionarios', FuncionarioController.delete)

export { funcionarioRouter }