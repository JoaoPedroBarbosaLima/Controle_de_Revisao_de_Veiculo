import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import { mainRouter } from "./routes/main.js"
import { funcionarioRouter } from "./routes/funcionario.js"
import { veiculoRouter } from "./routes/veiculo.js"
import { clienteRouter } from "./routes/cliente.js"
import { usuarioRouter } from "./routes/Usuario.js"
import auth from "./middleware/auth.js"

const PORT = 5000


const server = express()

server.use(express.json())
server.use(cors({
    origin: 'http://localhost:5173',
    credentials: true    
}));


server.use(cookieParser())

server.use(usuarioRouter)
server.use(auth)


server.use(
    mainRouter,
    funcionarioRouter,
    veiculoRouter,
    clienteRouter,
)

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}.\n http://localhost:${PORT}/`)
})