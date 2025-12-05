import { prisma } from '../database/client.js'

class FuncionarioService {

    
    static async criarFuncionario(dadosFuncionario) {
        try{

            const novoFunc = await prisma.funcionario.create({                
                data: {
                    cpf: dadosFuncionario.cpf,
                    nome: dadosFuncionario.nome,
                    telefone: dadosFuncionario.telefone
                },
            });

            return novoFunc;

        } catch (erro) {
            console.error('Erro ao criar funcionario', erro);
            throw new Error('Falha no serviço para criar funcionario')
        }
    }
        

}

export default FuncionarioService