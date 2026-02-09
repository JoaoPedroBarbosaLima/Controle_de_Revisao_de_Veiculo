import RegistroService from "../services/RegistroService.js"
import UsuarioService from "../services/UsuarioService.js"
import jwt from "jsonwebtoken"
import "dotenv/config";

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
                response.status(400).json({
                Erro: erro.message
            })
        }
    }

    async login(request,response){
         try{

            const rslt = await UsuarioService.buscarusuariologado(request.body)


            if (!rslt.sucesso) {
                return response.status(400).json({ erro: rslt.mensagem });
            }

            const{id_usuario,nome,email} = rslt.usuario

            const token = jwt.sign({id_usuario}, process.env.SECRET, {expiresIn: process.env.EXPIRESIN})

            response.cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 24 * 60 * 60 * 1000
            })

            return response.json({ 
                usuario: {
                    id_usuario,
                    nome,
                    email
                },
                message: "Login Realizado com sucesso"
            });


        }catch(erro){

            return response.status(400).json({
                Erro: erro
            })
        }
    }

    async buscarusuarioId(request,response){
         try{

            const rslt = await UsuarioService.buscarusuarioid(request.body)


            if (!rslt.sucesso) {
                return response.status(400).json({ erro: rslt.mensagem });
            }

            const{id_usuario,nome,email} = rslt.usuario

            return response.json({ 
                usuario: {
                    id_usuario,
                    nome,
                    email
                },
                token: jwt.sign({id_usuario}, process.env.SECRET, {
                    expiresIn: process.env.EXPIRESIN
                }),
            });


        }catch(erro){

            return response.status(400).json({
                Erro: erro
            })
        }
    }

}

export default UsuarioController