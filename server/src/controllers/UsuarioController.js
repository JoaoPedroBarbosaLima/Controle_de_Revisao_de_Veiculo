import RegistroService from "../services/RegistroService.js"

class UsuarioController {
    async getAll(request,response){

        try{
            const rslt = await RegistroService.listarUsuarios()
    
            const obj = rslt.map(p => ({
                cpf: parseInt(p.cpf),
                nome: p.nome,
                telefone: p.telefone,
                email: p.email
            }))
    
            response.status(200).json(obj)

        } catch(erro){
            response.status(400).json({
                Erro:`Erro ao listar Usuarios`
            })
        }

    }
    
    async create(request,response){
        try{
            const rslt = await RegistroService.registrarUsuarioCliente(request.body)
            response.status(201).json({
                message: 'Usuario registrado com succeso',
            })

        }catch (erro){
            response.status(400).json({
                Erro: erro.message
            })
        }        
    }

    async delete(request,response){
        try{
            const rslt = await UsuarioService.deletarUsuario(request.body)

            response.status(200).json({
                menssage: 'Usuario deletado com sucesso',
                email: rslt.email
            })
        } catch(erro){
            response.status(400).json({erro:'Erro ao deletar usuario'})
        }
    }

}

export default UsuarioController