import VeiculoService from '../services/VeiculoService.js'

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
                cpf_responsavel: parseInt(result.cpf_responsavel),
                tipo: result.tipo
            })
        } catch(erro){
            response.status(400).json({
                erro: erro.message
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

    async listall(request,response){
        try{
            const rslt = await VeiculoService.listarveiculos()

            const veiculos = rslt.map(v => ({
                placa: v.placa,
                quilometragem: parseInt(v.quilometragem),
                cor: v.cor,
                modelo: v.modelo,
                marca: v.marca,
                cpf_responsavel: parseInt(v.cpf_responsavel),
                tipo: v.tipo
            }))

            response.status(200).json(veiculos)

        } catch(erro){
            response.status(400).json({
                Erro:`Erro ao listar veiculos`
            })
        }
    }

}

export default VeiculoController