import { Customer } from '@prisma/client'
import database from '../database'

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

export default CustomerRepository;