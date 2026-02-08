import { Injectable } from '@nestjs/common';
import { Customer } from './interface/customer.interface';

@Injectable()
export class CustomerService {
    private readonly customers: Customer[] = [];

    createCustomer(customer): Customer {
        const newCustomer = {
            id: Date.now(),
            ...customer,
        };
        this.customers.push(newCustomer);
        return newCustomer;
    }

    getAllCustomers(): Customer[] {
        return this.customers;
    }

    getCustomerById(id: string): Customer | undefined {
        return this.customers.find((customer) => customer.id === parseInt(id));
    }
}
