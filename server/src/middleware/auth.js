import jwt from "jsonwebtoken"
import { promisify } from "util"
import "dotenv/config";

export default async (req, res, next) => {

    try {
        const token = req.cookies?.token
    if(!token){
        return res.status(401).json({erro: "Token não foi fornecido"})
    }
        const decoded = await promisify(jwt.verify)(token,process.env.SECRET)

        req.user = {
            id_usuario: decoded.id_usuario,
            tipo: decoded.tipo,
            email: decoded.email,
        }

        return next()

    } catch (error) {
        return res.status(400).json(error)
    }

}