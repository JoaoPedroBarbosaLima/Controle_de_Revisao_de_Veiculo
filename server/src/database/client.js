import { PrismaPg } from "@prisma/adapter-pg";
import{PrismaClient} from '../generated/client/index.js'
import "dotenv/config";

const adapter = new PrismaPg({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

const Prisma = new PrismaClient({adapter})

export { Prisma }

