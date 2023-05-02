class CustomerService {
    constructor(
        private customerRepository: any
    ) { }
    //Tem a tarefa de retornar o repositório do Customer
    public async execute(name: string, email: string) {

        const customer = await this.customerRepository.create(name, email)
        return customer;
    }
}

export { CustomerService };