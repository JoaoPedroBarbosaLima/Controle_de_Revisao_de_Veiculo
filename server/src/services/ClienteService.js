import { Prisma } from "../database/client.js";

class ClienteService {
    static async listarCliente(){
        try{
            return await Prisma.cliente.findMany()
        }catch(erro){
            throw new Error(erro)
        }
    }

    static async registrarCliente(tx,dadosCliente){

        try{

            const novocliente = await tx.cliente.create({
                data: {
                    id_usuario: dadosCliente.id_usuario,
                    cpf: dadosCliente.cpf,
                    nome: dadosCliente.nome,
                    telefone: dadosCliente.telefone
                }
            })

            return novocliente

        } catch(erro){
            if(erro.code  == 'P2002'){
                throw new Error(`Cliente de cpf '${dadosCliente.cpf}' já criado.`)
            }
            throw new Error(erro)
        }

    }
    
    static async deletarCliente(dadosCliente){
        try{
            
            return await Prisma.cliente.delete({
                where: {
                    cpf: dadosCliente.cpf
                }
            })

        }catch(erro){
            throw new Error('Falha no serviço para deletar funcionario')
        }
    }

}

export default ClienteService