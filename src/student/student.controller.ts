import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) { }

  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  getStudentByid(@Param('id') id: string) {
    return this.studentService.getStudentByid(id);
  }

  @Post()
  addStudent(@Body() student: any) {
    return this.studentService.addStudent(student);
  }

  @Put(':id')
  updateStudent(@Param('id') id: string, @Body() student: any) {
    return this.studentService.updateStudent(id, student);
  }

  @Patch('course/:id')
  updateStudentCourse(@Param('id') id: string, @Body() course: { course: string }) {
    return this.studentService.updateStudentCourse(id, course.course);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(id);
  }
}
