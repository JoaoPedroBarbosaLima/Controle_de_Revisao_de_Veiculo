import express from "express"
import UsuarioControl from "../controllers/UsuarioController.js"

const UsuarioController = new UsuarioControl()
const usuarioRouter = express.Router()

usuarioRouter.get('/api/usuario', UsuarioController.getAll)
usuarioRouter.get('/api/auth/validate', UsuarioController.validate)
usuarioRouter.delete('/api/usuario', UsuarioController.delete)
usuarioRouter.get('/api/usuario/cliente', UsuarioController.getusuariocliente)
usuarioRouter.get('/api/usuario/logout', UsuarioController.logout)
usuarioRouter.put('/api/usuario/update', UsuarioController.update)

export { usuarioRouter }