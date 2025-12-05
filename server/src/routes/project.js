import express from "express"
import ProjectControl from "../controllers/ProjectController.js"

const projectController = new ProjectControl()
const projectRouter = express.Router()

projectRouter.get('/api/projects', projectController.getAll)

projectRouter.post('/api/novofuncionario', (request,response) => {
    projectController.create(request, response)
})

export default projectRouter