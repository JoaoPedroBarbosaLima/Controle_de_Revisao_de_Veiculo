import ClienteService from "../services/ClienteService.js"

class ClienteController {
    async getAll(request,response){
        try{
            if(!(request.user.tipo == 'ADMIN'))  return response.status(400).json({ message: "Usuario não autorizado"});
            const rslt = await ClienteService.listarCliente()
    
            const clientes = rslt.map(c => ({
                cpf: parseInt(c.cpf),
                nome: c.nome,
                telefone: c.telefone
            }))
    
            return response.status(200).json(clientes)

        } catch(erro){
            return response.status(400).json({Erro:`Erro ao listar Clientes`})
        }

    }

    async create(request,response){

        try{
            const rslt = await ClienteService.registrarCliente(request.body)
            response.status(201).json({
                message: 'Pessoa registrada com succeso',
                cpf: parseInt(rslt.cpf),
                nome: rslt.nome,
                tel: rslt.telefone
            })

        }catch(erro){
                response.status(400).json({
                Erro: erro.message
            })
        }

    }

    async delete(request,response){
        try{
            const rslt = await ClienteService.deletarCliente(request.body)

            response.status(200).json({
                menssage: 'Cliente deletado com sucesso',
                cpf: parseInt(rslt.cpf)
            })

        }catch(erro){
            response.status(400).json({erro:'Erro ao deletar'})
        }
    }

}

export default ClienteController