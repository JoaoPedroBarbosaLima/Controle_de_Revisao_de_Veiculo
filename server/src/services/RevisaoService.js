import { Prisma } from '../database/client.js'
import ClienteService from './ClienteService.js'
import VeiculoService from './VeiculoService.js'
class RevisaoService {

    static async listarrevisoes(dados){

        let revisoes

        if(dados.tipo == "CLIENTE") {
            return await Prisma.$transaction(async (tx) => {


                let cliente = await ClienteService.buscarcliente(dados, tx)

                cliente = {
                    tipo: dados.tipo,
                    cpf: parseInt(cliente.cliente.cpf)
                }

                let veiculos = await VeiculoService.listarveiculos(cliente)

                const placaVeiculos = veiculos.map(v => v.placa)

                return await tx.revisao.findMany({
                    where: {
                        placa_veiculo: {
                            in: placaVeiculos
                        }
                    }
                    })

                

            })
        }

        return await Prisma.revisao.findMany()

    }

    static async create(dados){

        try {
            const revisao = await Prisma.revisao.create({
                data: {
                    cpf_funcionario: dados.cpf_funcionario,
                    placa_veiculo: dados.placa_veiculo,
                    data_revisao: dados.data_revisao,
                    data_prox_revisao: dados.data_prox_revisao
                }
            })

            if(!revisao) return { sucesso: false, mensagem: `Revisao não registrada` }

            return { sucesso: true, mensagem: `Revisao registrada`, revisao: revisao }

        } catch (error) {
            return { sucesso: false, mensagem: `Revisao não registrada`, error: error }
        }

    }

    static async delete(dados){

        try {
            const revisao = await Prisma.revisao.delete({
                where: {
                    id_revisao: parseInt(dados.id_revisao),
                    placa_veiculo: dados.placa_veiculo
                }
            })

            if(!revisao) return { sucesso: false, mensagem: `Revisao não deletada` }

            return { sucesso: true, mensagem: `Revisao deletada`, revisao: revisao }

        } catch (error) {
            return { sucesso: false, mensagem: `Revisao não deletada`, error: error }
        }

    }

}

export default RevisaoService