import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Employee } from './schema/employee.schema';
import { Account } from 'src/account/schema/account.schema';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private employeeModel: Model<Employee>
  ) { }

  create(createEmployeeDto: CreateEmployeeDto) {
    const employee = new this.employeeModel(createEmployeeDto);
    return employee.save();
  }

  findAll() {
    return this.employeeModel.find().populate('account').exec();
  }

  findOne(id: string) {
    return this.employeeModel.findById(id).populate('account');
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto, { new: true });
  }

  remove(id: string) {
    return this.employeeModel.findByIdAndDelete(id);
  }
}
