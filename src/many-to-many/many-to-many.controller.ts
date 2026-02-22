import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ManyToManyService } from './many-to-many.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';

@Controller('many-to-many')
export class ManyToManyController {
  constructor(private readonly manyToManyService: ManyToManyService) { }

  @Post('projects')
  createProject(@Body() createProjectDto: CreateProjectDto) {
    return this.manyToManyService.createProject(createProjectDto);
  }

  @Post('developers')
  createDeveloper(@Body() createDeveloperDto: CreateDeveloperDto) {
    return this.manyToManyService.createDeveloper(createDeveloperDto);
  }

  @Get('projects')
  findAllProjects() {
    return this.manyToManyService.findAllProjects();
  }

  @Get('projects/:id')
  findOneProject(@Param('id') id: string) {
    return this.manyToManyService.findOneProject(id);
  }

  @Patch('projects/:id')
  updateProject(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.manyToManyService.updateProject(id, updateProjectDto);
  }

  @Delete('projects/:id')
  removeProject(@Param('id') id: string) {
    return this.manyToManyService.removeProject(id);
  }

  @Get('developers')
  findAllDevelopers() {
    return this.manyToManyService.findAllDevelopers();
  }

  @Get('developers/:id')
  findOneDeveloper(@Param('id') id: string) {
    return this.manyToManyService.findOneDeveloper(id);
  }

  @Patch('developers/:id')
  updateDeveloper(@Param('id') id: string, @Body() updateDeveloperDto: UpdateDeveloperDto) {
    return this.manyToManyService.updateDeveloper(id, updateDeveloperDto);
  }

  @Delete('developers/:id')
  removeDeveloper(@Param('id') id: string) {
    return this.manyToManyService.removeDeveloper(id);
  }
}
