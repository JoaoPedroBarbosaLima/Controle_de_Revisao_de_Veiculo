import ClienteService from "../services/ClienteService.js"

class ClienteController {
    async listall(request,response){
        try{
            const rslt = await ClienteService.listarCliente()
    
            const clientes = rslt.map(c => ({
                cpf: parseInt(c.cpf),
                nome: c.nome,
                proprietario: c.proprietario,
                telefone: c.telefone
            }))
    
            response.status(200).json(clientes)

        } catch(erro){
            response.status(400).json({Erro:`Erro ao listar Clientes`})
        }

    }
}

export default ClienteController