import express from "express"
import ClienteControl from "../controllers/ClienteController.js"

const ClienteController = new ClienteControl()
const clienteRouter = express.Router()

clienteRouter.get('/api/cliente', ClienteController.getAll)

clienteRouter.post('/api/cliente', ClienteController.create)

clienteRouter.delete('/api/cliente', ClienteController.delete)

export { clienteRouter }