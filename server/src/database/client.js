import { PrismaPg } from "@prisma/adapter-pg";
import{PrismaClient} from '../generated/client/index.js'
import "dotenv/config";
import { stringify } from "querystring";

console.log("Conteudo: " + process.env.DATABASE+ " Tipo:" + typeof(process.env.DATABASE))


const adapter = new PrismaPg({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

const prisma = new PrismaClient({adapter})

export {prisma}

