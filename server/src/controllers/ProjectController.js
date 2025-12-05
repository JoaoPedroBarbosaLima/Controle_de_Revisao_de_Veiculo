import FuncionarioService from "../models/Funcionario.js"

class ProjectController {
    getAll(request,response){
        response.json({
            id:1,
            name: "Server"
        })
    }
    
    async create(request,response){
        try{
            const result = await FuncionarioService.criarFuncionario(request.body)
            console.log("Teste")
            return response.status(201).json(result)
        }catch (erro){
            console.log(erro)
            return response.status(400).json({erro:'Erro ao cadastrar'})
        }
        
    }

}

export default ProjectController