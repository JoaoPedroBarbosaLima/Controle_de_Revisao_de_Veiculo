import FuncionarioService from "../services/FuncionarioService.js"
import ClienteService from "../services/ClienteService.js"
import { Prisma } from "../database/client.js"
import UsuarioService from "../services/UsuarioService.js"

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
            return response.status(400).json({
                Erro:`Erro ao listar funcionarios`
            })
        }

    }
    
    async create(request,response){
        try{

            let cliente = await ClienteService.buscarcliente(request.body, null)
            let dados
            
            if (cliente.sucesso == true) {
                const rslt = await FuncionarioService.registrarFuncionario(cliente.cliente)
                console.log(rslt)
                dados = {
                    id_usuario: rslt.id_usuario,
                    tipo: 'FUNCIONARIO'
                }
                let usuario = await UsuarioService.updateUsuariopermissao(null, dados)
                return response.status(200).json({
                    menssagem: `Funcionario registrado com sucesso`
                })
            }

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
            response.status(400).json({erro:'Erro ao deletar'})
        }
    }

}

export default FuncionarioController