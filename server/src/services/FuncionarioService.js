import { Prisma } from '../database/client.js'

class FuncionarioService {

    static async listarFuncionarios(){
        try {
            
            return await Prisma.funcionario.findMany()
        } catch (erro) {
            console.error(erro)
            throw new Error('Falha no serviço para listar funcionarios')
        }
    }
    

    static async buscarfuncionario(dados){
        try {

            console.log(dados.id_usuario)

            return await Prisma.funcionario.findFirst({
                where: {
                    id_usuario: dados.id_usuario
                }
            })

        } catch (erro) {
            console.error(erro)
            throw new Error('Falha no serviço para buscar funcionario')
        }
    }

    
    static async registrarFuncionario(dadosFuncionario) {
        try{

            return await Prisma.funcionario.create({                
                data: {
                    id_usuario: dadosFuncionario.id_usuario,
                    cpf: dadosFuncionario.cpf,
                    nome: dadosFuncionario.nome,
                    telefone: dadosFuncionario.telefone
                }
            })

        } catch (erro) {

            console.error(erro)

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
            throw new Error('Falha no serviço para deletar funcionario')
        }
    }

}

export default FuncionarioService