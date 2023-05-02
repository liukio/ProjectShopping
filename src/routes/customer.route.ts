import { Router } from "express";
import { CustomerController } from "../controllers/customer.controller";

const router = Router();
const createCustomer = new CustomerController();

router.post('/customer', createCustomer.handle)

export { router }