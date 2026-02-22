import { Module } from '@nestjs/common';
import { ManyToManyService } from './many-to-many.service';
import { ManyToManyController } from './many-to-many.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Project, ProjectSchema } from './schema/project.schema';
import { Developer, DeveloperSchema } from './schema/developer.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Project.name, schema: ProjectSchema },
    { name: Developer.name, schema: DeveloperSchema },
  ])],
  controllers: [ManyToManyController],
  providers: [ManyToManyService],
})
export class ManyToManyModule { }
