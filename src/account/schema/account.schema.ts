
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Employee } from 'src/employee/schema/employee.schema';

export type AccountDocument = HydratedDocument<Account>;

@Schema()
export class Account {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true })
    employeeId: mongoose.Schema.Types.ObjectId;

    @Prop()
    baseSalary: number;

    @Prop()
    hra: number;

    @Prop()
    da: number;

    @Prop()
    pf: number;

    @Prop()
    specialAllowance: number;

    @Prop()
    totalSalary: number;
}

export const AccountSchema = SchemaFactory.createForClass(Account);