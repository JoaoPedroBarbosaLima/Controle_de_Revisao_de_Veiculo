import { Prisma } from "../database/client.js";

class ClienteService {
    static async listarCliente(){
        try{
            return await Prisma.cliente.findMany()
        }catch(erro){
            throw new Error(erro)
        }
    }
}

export default ClienteService