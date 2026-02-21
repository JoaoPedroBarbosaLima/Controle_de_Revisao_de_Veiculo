import Usuarioclienteservice from "../services/Usuarioclienteservice.js"
import UsuarioService from "../services/UsuarioService.js"
import jwt from "jsonwebtoken"
import "dotenv/config";
class UsuarioController {
    async getAll(request,response){

        try{

            const rslt = await UsuarioService.listarUsuarios()
            const obj = rslt.map(p => ({
                cpf: parseInt(p.cpf),
                nome: p.nome,
                telefone: p.telefone,
                email: p.email
            }))
    
            
            return response.status(200).json(obj)

        } catch(erro){
            return  response.status(400).json({
                Erro:`Erro ao listar Usuarios`
            })
        }

    }

    async validate(request,response){

        try{

            const rslt = await UsuarioService.verificarusuarioexistente(request.user)

            if(rslt) {
                return response.status(200).json(request.user.tipo)
            }
            return response.status(400).end()

        } catch(erro){
            
            return response.status(400).json({
                Erro:`Erro ao validar usuario`
            })
        }

    }

    async logout(request,response){
        
        try{

            response.clearCookie("token", {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                path: "/" // importante se você não definiu outro path
            });

            return response.status(200).json()
        } catch(erro){
            
            return response.status(400).json({
                Erro:`Erro ao validar usuario`
            })
        }

    }

    async create(request,response){
        try{
            await Usuarioclienteservice.registrarUsuarioCliente(request.body)
            return response.status(201).json({
                message: 'Usuario registrado com succeso',
            })

        }catch (erro){
            return response.status(400).json({
                Erro: erro.message
            })
        }        
    }

    async delete(request,response){
        try{
            const rslt = await UsuarioService.deletarUsuario(request.body)

            return response.status(200).json({
                menssage: 'Usuario deletado com sucesso',
                email: rslt.email
            })
        } catch(erro){
            return response.status(400).json({
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


            const{id_usuario,email,tipo} = rslt.usuario

            const token = jwt.sign({id_usuario,email,tipo}, process.env.SECRET, {expiresIn: process.env.EXPIRESIN})

            response.cookie("token", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 24 * 60 * 60 * 1000
            })

            return response.status(200).json({ 
                message: "Login Realizado com sucesso"
            });


        }catch(erro){

            return response.status(400).json({
                Erro: erro
            })
        }
    }


    async getusuariocliente(request,response){
        try {
            
            const usuariocliente = await Usuarioclienteservice.getusuariocliente(request.user.id_usuario)

            return response.status(200).json(usuariocliente.usuarioCliente)

        } catch (erro) {
            return response.status(400).json({
                Erro: erro
            })
        }
    }

    async buscarusuarioId(request,response){
         try{

            const rslt = await UsuarioService.buscarusuarioid(request.body.id_usuario)

            if (!rslt.sucesso) {
                return response.status(400).json({ erro: rslt.mensagem });
            }

            const{id_usuario,nome,email,tipo} = rslt.usuario

            return response.json({ 
                usuario: {
                    id_usuario,
                    nome,
                    email,
                },
                token: jwt.sign({id_usuario,tipo}, process.env.SECRET, {
                    expiresIn: process.env.EXPIRESIN
                }),
            });

        }catch(erro){

            return response.status(400).json({
                Erro: erro
            })
        }
    }

    async update(request,response){
        try {

            const dados = {
                id: request.user.id_usuario,
                nome: request.body.nome,
                email: request.body.email,
                telefone: request.body.telefone
            }

            const rslt = await Usuarioclienteservice.updateUsuarioCliente(dados)

            if(rslt.sucesso == true) return response.status(200).json(rslt.mensagem)

            return response.status(400).json(rslt.mensagem)
        } catch (erro) {
            return response.status(400).json({
                Erro: erro
            })
        }
    }

}

export default UsuarioController