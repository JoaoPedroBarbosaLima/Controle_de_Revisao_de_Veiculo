import { console } from "inspector";
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

    
    static async buscarcliente(dados,tx){
        try{
            let rslt

            if(tx == null){

                if("id_usuario" in dados){
                    rslt = await Prisma.cliente.findUnique({
                        where: {
                            id_usuario: dados.id_usuario,
                        }
                    })
                } else if ("cpf" in dados){
                    rslt = await Prisma.cliente.findUnique({
                        where: {
                            cpf: dados.cpf,
                        }
                    })
                }
                

            } else{

                if("id_usuario" in dados){
                    rslt = await tx.cliente.findUnique({
                        where: {
                            id_usuario: dados.id_usuario,
                        }
                    })
                } else if ("cpf" in dados){
                    rslt = await tx.cliente.findUnique({
                        where: {
                            cpf: dados.cpf,
                        }
                    })
                }
                
            }
            if(!rslt){
                return { sucesso: false, mensagem: `cliente não encontrado.` };
            }

            let cliente = {
                cpf: parseInt(rslt.cpf),
                id_usuario: rslt.id_usuario,
                nome: rslt.nome,
                telefone: rslt.telefone
            }

            return { sucesso: true, mensagem: `cliente encontrado`, cliente: cliente };

        }catch(erro){
            console.log(erro)
            return { sucesso: false, mensagem: 'Erro ao buscar usuário.', detalhe: erro.message };
        }
    }

    static async updateCliente(tx,dados){
        try{
            const cliente = await tx.cliente.update({
                where: {
                    id_usuario: dados.id
                }, 
                data: {
                    telefone: dados.telefone,
                    nome: dados.nome
                }
            })

            if(cliente) return {sucesso: true}
            return {sucesso: false}

        }catch(erro){
            return { sucesso: false, mensagem: 'Erro ao buscar usuário.', }
        }
    }

}

export default ClienteService