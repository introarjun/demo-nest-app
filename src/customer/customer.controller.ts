import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer-dto';
import * as customerInterface from './interface/customer.interface';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) { }

  @Post()
  createCustomer(@Body() createCustomerDto: CreateCustomerDto): customerInterface.Customer | undefined {
    return this.customerService.createCustomer(createCustomerDto);
  }

  @Get()
  getAllCustomers(): customerInterface.Customer[] {
    return this.customerService.getAllCustomers();
  }

  @Get(':id')
  getCustomerById(@Param('id') id: string): customerInterface.Customer | undefined {
    return this.customerService.getCustomerById(id);
  }
}
