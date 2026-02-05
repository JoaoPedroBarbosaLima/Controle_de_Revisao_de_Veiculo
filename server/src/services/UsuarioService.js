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
            console.log(erro)
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
            throw new Error(`Erro au atualizar senha`)
        }

    }

}

export default UsuarioService