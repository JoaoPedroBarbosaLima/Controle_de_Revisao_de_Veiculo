import { Prisma } from '../database/client.js'

class FuncionarioService {

    static async listarFuncionarios(){
        return await Prisma.funcionario.findMany()
    }

    
    static async registrarFuncionario(dadosFuncionario) {
        try{

            const novoFunc = await Prisma.funcionario.create({                
                data: {
                    cpf: dadosFuncionario.cpf,
                    nome: dadosFuncionario.nome,
                    telefone: dadosFuncionario.telefone
                },
            });

            return novoFunc

        } catch (erro) {
            console.error('Erro ao criar funcionario', erro)
            throw new Error('Falha no serviço para criar funcionario')
        }
    }

    static async deletarFuncionario(cpfFuncionario){
        try{
            const deleteFunc = await Prisma.funcionario.delete({
                where: {
                    cpf: cpfFuncionario.cpf
                }
            })
            return deleteFunc
        } catch(erro){
            console.error('Erro ao deletar funcionario', erro)
            throw new Error('Falha no serviço para deletar funcionario')
        }
    }

}

export default FuncionarioService