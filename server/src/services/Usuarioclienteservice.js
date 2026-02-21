import { Prisma } from '../database/client.js'
import UsuarioService from './UsuarioService.js'
import ClienteService from './ClienteService.js'

class Usuarioclienteservice {

    static async updateUsuarioCliente(dados){
        

        try {
            return await Prisma.$transaction(async (tx) => {
                
                const updateUsuario = await UsuarioService.updateUsuario(tx,dados)

                const dadosCliente = {
                    nome: dados.nome,
                    telefone: dados.telefone,
                }

                const updateCliente = await ClienteService.updateCliente(tx, dados)

                return { sucesso: true, mensagem: `cliente e usuario atualizado com sucesso` };
            })
        } catch (error) {
            return { sucesso: false, mensagem: `nao foi possivel atualizar cliente e usuario` };
        }
    }

    static async registrarUsuarioCliente(dados){
        try {

            return await Prisma.$transaction(async (tx) => {

                const dadosUsuario = {
                    nome: dados.nome,
                    email: dados.email,
                    password_hash: dados.senha,
                    ativo: dados.ativo
                }
                
                const novoUsuario = await UsuarioService.registrarUsuario(tx,dadosUsuario)

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

    static async getusuariocliente(id){
        try {

            const dados = {
                id_usuario: id
            }

            return await Prisma.$transaction(async (tx) => {
                const dadosUsuario = await UsuarioService.buscarusuarioid(tx,id)
                const dadosCliente = await ClienteService.buscarcliente(dados,tx)
                const usuarioCliente = {
                    nome: dadosCliente.cliente.nome,
                    email: dadosUsuario.usuario.email,
                    cpf: parseInt(dadosCliente.cliente.cpf),
                    telefone: dadosCliente.cliente.telefone
                }

                if(!usuarioCliente){
                    return { sucesso: false, mensagem: `Usuario e cliente associado não encontrado` };
                }

                return { sucesso: true, mensagem: `Usuario e cliente associado encontrado`, usuarioCliente: usuarioCliente };

            })
        } catch (error) {
        }
    }
}

export default Usuarioclienteservice