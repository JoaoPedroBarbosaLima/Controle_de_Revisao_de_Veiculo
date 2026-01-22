import FuncionarioService from "../services/FuncionarioService.js"

class FuncionarioController {
    async getAll(request,response){

        try{
            const rslt = await FuncionarioService.listarFuncionarios()
    
            const obj = rslt.map(p => ({
                cpf: parseInt(p.cpf),
                nome: p.nome,
                telefone: p.telefone
            }))
    
            response.status(200).json(obj)

        } catch(erro){
            response.status(400).json({
                Erro:`Erro ao listar funcionarios`
            })
        }

    }
    
    async create(request,response){
        try{

            const rslt = await FuncionarioService.registrarFuncionario(request.body)
            console.log(rslt)
            response.status(201).json({
                message: 'Pessoa registrada com succeso',
                cpf: parseInt(rslt.cpf),
                nome: rslt.nome,
                tel: rslt.telefone
            })

        }catch (erro){
            console.log(erro)
            response.status(400).json({
                Erro: erro.message
            })
        }        
    }

    async delete(request,response){
        try{
            const rslt = await FuncionarioService.deletarFuncionario(request.body)

            response.status(200).json({
                menssage: 'Funcionario deletado com sucesso',
                cpf: parseInt(rslt.cpf)
            })
        } catch(erro){
            console.log(erro)
            response.status(400).json({erro:'Erro ao deletar'})
        }
    }

}

export default FuncionarioController