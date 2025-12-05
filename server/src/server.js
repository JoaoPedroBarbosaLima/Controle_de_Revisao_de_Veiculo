import express from "express"
import mainRouter from "./routes/main.js"
import projectRouter from "./routes/project.js"

const PORT = 5000

const server = express()

server.use(express.json())
server.use(mainRouter)
server.use(projectRouter)

server.listen(PORT, () => {
    console.log(`[SERVER] Server is running on port ${PORT}.\n http://localhost:5000/`)
})