import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './schema/project.schema';
import { Model } from 'mongoose';
import { Developer } from './schema/developer.schema';
import { UpdateDeveloperDto } from './dto/update-developer.dto';

@Injectable()
export class ManyToManyService {
  constructor(
    @InjectModel(Project.name)
    private readonly projectModel: Model<Project>,
    @InjectModel(Developer.name)
    private readonly developerModel: Model<Developer>,
  ) { }

  createProject(createProjectDto: CreateProjectDto) {
    const project = new this.projectModel(createProjectDto);
    return project.save();
  }

  findAllProjects() {
    return this.projectModel.find().populate('developers').exec();
  }

  findOneProject(id: string) {
    return this.projectModel.findById(id).populate('developers').exec();
  }

  updateProject(id: string, updateProjectDto: UpdateProjectDto) {
    return this.projectModel.findByIdAndUpdate(id, updateProjectDto).exec();
  }

  removeProject(id: string) {
    return this.projectModel.findByIdAndDelete(id).exec();
  }

  createDeveloper(createDeveloperDto: CreateDeveloperDto) {
    const developer = new this.developerModel(createDeveloperDto);
    return developer.save();
  }

  findAllDevelopers() {
    return this.developerModel.find().populate('projects').exec();
  }

  findOneDeveloper(id: string) {
    return this.developerModel.findById(id).populate('projects').exec();
  }

  updateDeveloper(id: string, updateDeveloperDto: UpdateDeveloperDto) {
    return this.developerModel.findByIdAndUpdate(id, updateDeveloperDto).exec();
  }

  removeDeveloper(id: string) {
    return this.developerModel.findByIdAndDelete(id).exec();
  }
}
