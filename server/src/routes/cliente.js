import express, { Router } from "express"
import ClienteControl from "../controllers/ClienteController.js"

const ClienteController = new ClienteControl()
const clienteRouter = express.Router()

clienteRouter.get('/api/clientes/listarTodos', ClienteController.listall)

export { clienteRouter }