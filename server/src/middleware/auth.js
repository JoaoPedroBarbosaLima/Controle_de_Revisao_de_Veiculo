import jwt from "jsonwebtoken"
import { promisify } from "util"
import "dotenv/config";

export default async (req, res, next) => {
    const token = req.cookies?.token
    if(!token){
        return res.status(401).json({erro: "Token não foi fornecido"})
    }
    try {
        const decoded = await promisify(jwt.verify)(token,process.env.SECRET)
        req.body.userId = decoded.id_usuario
        
        return next()

    } catch (error) {
        res.status(400).json(error)
    }

    next()
}