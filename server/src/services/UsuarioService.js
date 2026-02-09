import { Prisma } from '../database/client.js'
import Hash from './utils/passwordHash.js'


class UsuarioService{

    static async registrarUsuario(tx,dadosUsuario){
        try {
            const senha = await Hash.password_hash(dadosUsuario.password_hash)

            return await tx.usuario.create({
                data: {
                    nome: dadosUsuario.nome,
	                email: dadosUsuario.email,
                    ativo: true,
	                password_hash: senha
                }

            })
            
        } catch (erro) {
             if(erro.code  == 'P2002'){
                throw new Error(`Usuario de email '${dadosUsuario.email}' já criado.`)
            }
            throw new Error('Falha no serviço para criar usuario')
        }
    }

    static async mudarsenha(usuarioid,senhaatual,novasenha){
        try{
            const usuario = await Prisma.usuario.findUnique({
                where: {
                    id_usuario: usuarioid
                }
            })

            if(!usuario){
                throw new Error(`Usuario de id '${usuarioid}' não encontrado`)
            }

            else if (senhaatual == novasenha){
                throw new Error(`Insira uma senha diferente!!`)
            }

            else{
                const novasenhahash = await Hash.password_hash(novasenha)
                return await Prisma.usuario.update({
                    where: {
                        id_usuario: usuarioid
                    },
                    data: {
                        password_hash: novasenhahash
                    }
                })
            }



        } catch(erro){
            throw new Error(`Erro ao atualizar senha`)
        }

    }

    static async buscarusuariologado(dadosUsuario){
        try{

            const senha = await Hash.password_hash(dadosUsuario.senha)
            const usuario = await Prisma.usuario.findUnique({
                where: {
                    email: dadosUsuario.email,
                    ativo: true
                }
            })

            
            if(!usuario){
                return { sucesso: false, mensagem: `Usuário de e-mail '${dadosUsuario.email}' não encontrado.` };
            }
            
            const compare = await Hash.compare_hash(dadosUsuario.senha, usuario.password_hash)

            if(!compare){
                return { sucesso: false, mensagem: `senha não bate` };
            }

            return { sucesso: true, mensagem: `Usuario encontrado`, usuario: usuario };


        }catch(erro){
            return { sucesso: false, mensagem: 'Erro ao buscar usuário.', detalhe: erro.message };
        }
    }
    

        static async buscarusuarioid(dadosUsuario){
        try{
            const usuario = await Prisma.usuario.findUnique({
                where: {
                    id_usuario: dadosUsuario.id_usuario,
                    ativo: true
                }
            })

            
            if(!usuario){
                return { sucesso: false, mensagem: `Usuário de id '${dadosUsuario.email}' não encontrado.` };
            }
            

            return { sucesso: true, mensagem: `Usuario encontrado`, usuario: usuario };


        }catch(erro){
            return { sucesso: false, mensagem: 'Erro ao buscar usuário.', detalhe: erro.message };
        }
    }

}

export default UsuarioService