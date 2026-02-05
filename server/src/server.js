import express from "express"
import { mainRouter } from "./routes/main.js"
import { funcionarioRouter } from "./routes/funcionario.js"
import { veiculoRouter } from "./routes/veiculo.js"
import { clienteRouter } from "./routes/cliente.js"
import { usuarioRouter } from "./routes/Usuario.js"

const PORT = 5000

const server = express()

server.use(express.json())
server.use(
    mainRouter,
    funcionarioRouter,
    veiculoRouter,
    clienteRouter,
    usuarioRouter
)

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}.\n http://localhost:${PORT}/`)
})