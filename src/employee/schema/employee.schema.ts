
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Account } from 'src/account/schema/account.schema';

export type EmployeeDocument = HydratedDocument<Employee>;

@Schema()
export class Employee {
    @Prop()
    name: string;

    @Prop()
    email: string;

    @Prop()
    isActive: boolean;

    account?: Account;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);

EmployeeSchema.virtual('account', {
    ref: 'Account',
    localField: '_id',
    foreignField: 'employeeId',
    justOne: true,
});

EmployeeSchema.set('toJSON', { virtuals: true });
EmployeeSchema.set('toObject', { virtuals: true });
