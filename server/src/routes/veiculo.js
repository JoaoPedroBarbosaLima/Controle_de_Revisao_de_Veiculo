import express from 'express'

import VeiculoControl from '../controllers/VeiculoController.js'

const VeiculoController = new VeiculoControl()
const veiculoRouter = express.Router()


veiculoRouter.post('/api/veiculo/registrar', VeiculoController.create)
veiculoRouter.post('/api/veiculo/deletar', VeiculoController.delete)

export { veiculoRouter }