import { Prisma } from "../database/client.js";

class ClienteService {
    static async listarCliente(){
        try{
            return await Prisma.cliente.findMany()
        }catch(erro){
            throw new Error(erro)
        }
    }

    static async registrarCliente(dadosCliente){

        const novoCliente = await Prisma.cliente.create({
            data: {
                cpf: dadosCliente.cpf,
                nome: dadosCliente.nome,
                telefone: dadosCliente.telefone
            }
        })

        return novoCliente

    }
    
    static async deletarCliente(dadosCliente){
        try{
            
            return await Prisma.cliente.delete({
                where: {
                    cpf: dadosCliente.cpf
                }
            })

        }catch(erro){
            console.error('Erro ao deletar funcionario', erro)
            throw new Error('Falha no serviço para deletar funcionario')
        }
    }

}

export default ClienteService