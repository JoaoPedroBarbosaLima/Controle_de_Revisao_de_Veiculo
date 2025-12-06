import express from "express"
import mainRouter from "./routes/main.js"
import funcionarioRouter from "./routes/funcionario.js"

const PORT = 5000

const server = express()

server.use(express.json())
server.use(mainRouter)
server.use(funcionarioRouter)

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}.\n http://localhost:${PORT}/`)
})