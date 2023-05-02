import { Customer } from '@prisma/client'
import { database } from '../database'

//Faz CONEXÃO com o BANCO DE DADOS
class CustomerRepository {
    public async create(name: string, email: string): Promise<Customer> {
        const customer = await database.customer.create({
            data: {
                name: name,
                email: email
            }
        })
        return customer;
    }
}

export { CustomerRepository };