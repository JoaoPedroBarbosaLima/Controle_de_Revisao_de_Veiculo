import express from "express"
import UsuarioControl from "../controllers/UsuarioController.js"

const UsuarioController = new UsuarioControl()
const usuarioRouter = express.Router()

usuarioRouter.get('/api/Usuario', UsuarioController.getAll)

usuarioRouter.post('/api/Usuario', UsuarioController.create)

usuarioRouter.delete('/api/Usuario', UsuarioController.delete)

export { usuarioRouter }