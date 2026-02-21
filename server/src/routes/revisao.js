import express from "express"
import Revisaocontrol from "../controllers/RevisaoClontroller.js"

const Revisaocontroller = new Revisaocontrol()
const revisaoRouter = express.Router()

revisaoRouter.get('/api/revisao', Revisaocontroller.getAll)
revisaoRouter.post('/api/revisao', Revisaocontroller.create)
revisaoRouter.delete('/api/revisao', Revisaocontroller.delete)

export { revisaoRouter }