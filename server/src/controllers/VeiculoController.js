import { json } from 'stream/consumers'
import VeiculoService from '../models/modelVeiculo.js'

class VeiculoController{
    async create(request,response){
        try{


            const result = await VeiculoService.registrarVeiculo(request.body)
    
            response.status(201).json({
                message: 'Sucesso ao registrar veiculo',
                placa: result.placa,
                quilometragem: parseInt(result.quilometragem),
                cor: result.cor,
                modelo: result.modelo,
                marca: result.marca,
                tipo: result.tipo
            })
        } catch(erro){
            response.status(400).json({
                erro: `${erro}`
            })
        }
    }

    async delete(request,response){
        try{

        } catch(erro){
            response.status(400).json({
                erro: `Erro ao deletar veiculo `
            })
        }
    }

}

export default VeiculoController