import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create.user.dto';
import { updateUserDto } from './dto/update.user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<User>) { }

    async create(createUserDto: CreateUserDto) {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async findAll() {
        return this.userModel.find().exec();
    }

    async findOne(id: string) {
        return this.userModel.findById(id).exec();
    }

    async update(id: string, updateUserDto: updateUserDto) {
        return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
    }

    async remove(id: string) {
        return this.userModel.findByIdAndDelete(id).exec();
    }
}
