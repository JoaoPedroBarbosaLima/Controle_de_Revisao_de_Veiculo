import express from "express"
import UsuarioControl from "../controllers/UsuarioController.js"

const UsuarioController = new UsuarioControl()
const usuarioRouter = express.Router()

usuarioRouter.get('/api/usuario', UsuarioController.getAll)

usuarioRouter.post('/api/usuario', UsuarioController.create)

usuarioRouter.delete('/api/usuario', UsuarioController.delete)

usuarioRouter.post('/api/usuario/login', UsuarioController.login)

export { usuarioRouter }