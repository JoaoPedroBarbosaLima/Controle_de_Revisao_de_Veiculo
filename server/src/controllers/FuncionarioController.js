import FuncionarioService from "../services/modelFuncionario.js"

class FuncionarioController {
    async getAll(request,response){

        try{
            const result = await FuncionarioService.listarFuncionarios()
    
            const obj = result.map(p => ({
                cpf: parseInt(p.cpf),
                nome: p.nome,
                telefone: p.telefone
            }))
    
            response.status(200).json(obj)

        } catch(erro){
            response.status(400).json({erro:'Erro ao Listar'})
        }

    }
    
    async create(request,response){
        try{
            const result = await FuncionarioService.registrarFuncionario(request.body)

            response.status(201).json({
                message: 'Pessoa registrada com succeso',
                cpf: parseInt(result.cpf),
                nome: result.nome,
                tel: result.telefone
            })

        }catch (erro){
            console.log(erro)
            response.status(400).json({erro:'Erro ao cadastrar'})
        }
        
    }

    async delete(request,response){
        try{
            const result = await FuncionarioService.deletarFuncionario(request.body)
            response.status(200).json({
                menssage: 'Funcionario deletado com sucesso',
                cpf: parseInt(result.cpf)
            })
        } catch(erro){
            console.log(erro)
            response.status(400).json({erro:'Erro ao deletar'})
        }
    }

}

export default FuncionarioController