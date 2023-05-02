import { Product } from '@prisma/client'
import database from '../database'

class ProductRepository {
    public async create(title: string, price: number, description: string): Promise<Product> {
        const product = await database.product.create({
            data: {
                title: title,
                price: price,
                description: description
            }
        })
        return product;
    }
}

export { ProductRepository };