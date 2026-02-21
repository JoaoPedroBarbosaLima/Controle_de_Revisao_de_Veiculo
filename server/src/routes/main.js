import express from "express"
const mainRouter = express.Router()

mainRouter.get('/', (request,response)=>{
    response.send("<h1>Project Control Server</h1>")
})

mainRouter.get('/status', (request,response) => {
    const {nome, idade} = request.query
    response.json({
        code:100,
        message: `Project Control ${nome} API Server is running. ${idade}`
    })
})

mainRouter.get('/admin', (request,response) => {
    response.status(401).send("<h1>Unauthorized</h1>")
})

export { mainRouter }