import express from "express"
import FuncionarioControl from "../controllers/FuncionarioController.js"

const FuncionarioController = new FuncionarioControl()
const funcionarioRouter = express.Router()

funcionarioRouter.get('/api/funcionarios/listarTodos', FuncionarioController.getAll)

funcionarioRouter.post('/api/funcionarios/registrar', FuncionarioController.create)

funcionarioRouter.delete('/api/funcionarios/deletar', FuncionarioController.delete)

export {funcionarioRouter}