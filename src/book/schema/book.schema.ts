
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Book>;

@Schema({ timestamps: true })
export class Book {
    @Prop()
    name: string;

    @Prop()
    author: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
