import { Request, Response } from "express";
import { CustomerService } from "../services/customer.service";
import { CustomerRepository } from "../repositories/customer.repository";


//Recebe a REQUISIÇÃO do Usuário e retorna uma RESPOSTA
export class CustomerController {
    async handle(request: Request, response: Response) {
        const { name, email } = request.body;

        const createCustomer = new CustomerService(new CustomerRepository());

        const customer = await createCustomer.execute(
            name,
            email
        )
        return response.json(customer);
    }

}
