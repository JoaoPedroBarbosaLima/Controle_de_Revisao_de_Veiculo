import { Prisma } from '../database/client.js'
import UsuarioService from './UsuarioService.js'
import ClienteService from './ClienteService.js'

class RegistroService {
    static async registrarUsuarioCliente(dados){
        try {

            await Prisma.$transaction(async (tx) => {
                const dadosUsuario = {
                    nome: dados.nome,
                    email: dados.email,
                    password_hash: dados.senha,
                    ativo: dados.ativo
                }
                
                const novoUsuario = await UsuarioService.registrarUsuario(tx,dadosUsuario)

                console.log(novoUsuario)

                const dadosCliente = {
                    id_usuario: novoUsuario.id_usuario,
                    nome: dados.nome,
                    telefone: dados.telefone,
                    cpf: dados.cpf
                }

                const novoCliente =  await ClienteService.registrarCliente(tx,dadosCliente)

                return { novoCliente , novoUsuario }
        })

        } catch (error) {
            throw new Error(error.message)
        }     
        
    }
}

export default RegistroService