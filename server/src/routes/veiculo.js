import express from 'express'

import VeiculoControl from '../controllers/VeiculoController.js'

const VeiculoController = new VeiculoControl()
const veiculoRouter = express.Router()


veiculoRouter.post('/api/veiculo', VeiculoController.create)
veiculoRouter.delete('/api/veiculo', VeiculoController.delete)
veiculoRouter.get('/api/veiculo', VeiculoController.listartodos)

export { veiculoRouter }