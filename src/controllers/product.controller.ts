import { Request, Response } from "express";
import { database } from "../database";

export class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, email } = request.body;
        const customer = await database.customer.create({
            data: {
                name,
                email
            }
        })
        return response.json(customer)
    }
}