import FuncionarioService from "../services/FuncionarioService.js"
import RevisaoService from "../services/RevisaoService.js"
class Revisaocontroller {

    async getAll(request,response){

        const rslt = await RevisaoService.listarrevisoes(request.user)


        const revisoes = rslt.map(r => ({
            id_revisao: r.id_revisao,
            cpf_funcionario: parseInt(r.cpf_funcionario),
            placa_veiculo: r.placa_veiculo,
            data_revisao: r.data_revisao,
            data_prox_revisao: r.data_prox_revisao,
        }))
        
        return response.status(200).json(revisoes)

    }

    async create(request,response){

        try {
            
            if(request.user.tipo == 'CLIENTE') return response.status(400).json({message: `Sem autorização`})

            let rslt = await FuncionarioService.buscarfuncionario(request.user)

            let date = new Date(request.body.data_prox_revisao)
            let data_prox_revisao = date.toISOString()
            date = new Date()
            let data_revisao = date.toISOString()

            let dados = {
                data_prox_revisao: data_prox_revisao,
                data_revisao: data_revisao,
                placa_veiculo: request.body.placa,
                cpf_funcionario: parseInt(rslt.cpf)
            }

            
            rslt = await RevisaoService.create(dados)

            if(rslt.sucesso == false) return response.status(400).json({message: rslt.mensagem})

            return response.status(200).json({message: rslt.mensagem})

        } catch (erro) {

            return response.status(400).json({message: erro})
        }


    }

        async delete(request,response){

        try {
            
            if(request.user.tipo == 'CLIENTE') return response.status(400).json({message: `Sem autorização`})

            let rslt = await RevisaoService.delete(request.body)

            if(rslt.sucesso == false) return response.status(400).json({message: rslt.mensagem})

            return response.status(200).json({message: rslt.mensagem})

        } catch (erro) {
            console.log(erro)
            return response.status(400).json({message: erro})
        }


    }

}

export default Revisaocontroller