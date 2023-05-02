import { PrismaClient } from '@prisma/client'

export const database = new PrismaClient()

export default database
// use `prisma` in your application to read and write data in your DB