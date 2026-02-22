
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type LibraryDocument = HydratedDocument<Library>;

@Schema({ timestamps: true })
export class Library {
    @Prop()
    name: string;

    @Prop()
    address: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }] })
    books: string[];
}

export const LibrarySchema = SchemaFactory.createForClass(Library);
