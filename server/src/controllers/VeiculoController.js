import Usuarioclienteservice from '../services/Usuarioclienteservice.js'
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

            const rslt = await VeiculoService.deletarveiculo(request.body)
            response.status(200).json({
                message: 'Veiculo deletado com sucesso',
                placa: rslt.placa
            })

        } catch(erro){
            response.status(400).json({
                erro: `Erro ao deletar veiculo`
            })
        }
    }

    async listartodos(request,response){
        try{

            let rslt
            let dados = {
                tipo: request.user.tipo
            }
            if (request.user.tipo == 'CLIENTE'){
                const cliente = await Usuarioclienteservice.getusuariocliente(request.user.id_usuario)
                dados.cpf = cliente.usuarioCliente.cpf
            }

            rslt = await VeiculoService.listarveiculos(dados)

            const veiculos = rslt.map(v => ({
                placa: v.placa,
                quilometragem: parseInt(v.quilometragem),
                cor: v.cor,
                modelo: v.modelo,
                marca: v.marca,
                cpf_responsavel: parseInt(v.cpf_responsavel),
                tipo: v.tipo,
                revisao: v.revisao.map(rev => ({
                    id_revisao: rev.id_revisao,
                    cpf_funcionario: parseInt(rev.cpf_funcionario),
                    placa_veiculo: rev.placa_veiculo,
                    data_revisao: rev.data_revisao,
                    data_prox_revisao: rev.data_prox_revisao
                }))
            }))

            return response.status(200).json(veiculos)

        } catch(erro){
            console.log(erro)
            response.status(400).json({
                Erro:`Erro ao listar veiculos`
            })
        }
    }

}

export default VeiculoController