import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from './schema/account.schema';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Account.name) private accountModel: Model<Account>
  ) { }

  create(createAccountDto: CreateAccountDto) {
    const totalSalary = createAccountDto.baseSalary + createAccountDto.hra + createAccountDto.da + createAccountDto.pf + createAccountDto.specialAllowance;
    const accountData = { ...createAccountDto, totalSalary };
    const account = new this.accountModel(accountData);
    return account.save();
  }

  findAll() {
    return this.accountModel.find();
  }

  findOne(id: string) {
    return this.accountModel.findById(id);
  }

  update(id: string, updateAccountDto: UpdateAccountDto) {
    return this.accountModel.findByIdAndUpdate(id, updateAccountDto, { new: true });
  }

  remove(id: string) {
    return this.accountModel.findByIdAndDelete(id);
  }
}
