
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Project } from './project.schema';

export type DeveloperDocument = HydratedDocument<Developer>;

@Schema({ timestamps: true })
export class Developer {
    @Prop()
    name: string;

    @Prop()
    role: string;

    @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }] })
    projects: Project[];
}

export const DeveloperSchema = SchemaFactory.createForClass(Developer);
