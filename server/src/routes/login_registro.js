import express from "express"
import UsuarioControl from "../controllers/UsuarioController.js"


const UsuarioController = new UsuarioControl()
const login_registroRouter = express.Router()

login_registroRouter.post('/api/usuario/registrar', UsuarioController.create)
login_registroRouter.post('/api/usuario/login', UsuarioController.login)


export { login_registroRouter }