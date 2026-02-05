import { Prisma } from '../database/client.js'

class FuncionarioService {

    static async listarFuncionarios(){
        return await Prisma.funcionario.findMany()
    }

    
    static async registrarFuncionario(dadosFuncionario) {
        try{

            return await Prisma.funcionario.create({                
                data: {
                    cpf: dadosFuncionario.cpf,
                    nome: dadosFuncionario.nome,
                    telefone: dadosFuncionario.telefone
                }
            })

        } catch (erro) {
            if(erro.code  == 'P2002'){
                 throw new Error(`Funcionario de cpf '${dadosFuncionario.cpf}' já criado.`)
            }
            throw new Error('Falha no serviço para criar funcionario')
        }
    }

    static async deletarFuncionario(cpfFuncionario){
        try{
            
            return await Prisma.funcionario.delete({
                where: {
                    cpf: cpfFuncionario.cpf
                }
            })

        } catch(erro){
            console.error('Erro ao deletar funcionario', erro)
            throw new Error('Falha no serviço para deletar funcionario')
        }
    }

}

export default FuncionarioService