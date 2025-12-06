import express, { response } from "express"
import FuncionarioControl from "../controllers/FuncionarioController.js"
import { request } from "http"

const FuncionarioController = new FuncionarioControl()
const funcionarioRouter = express.Router()

funcionarioRouter.get('/api/projects', FuncionarioController.getAll)

funcionarioRouter.post('/api/criarfuncionario', (request,response) => {
    FuncionarioController.create(request, response)
})

funcionarioRouter.delete('/api/deletefuncionario', (request,response) => {
    FuncionarioController.delete(request, response)
})

export default funcionarioRouter