import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class StudentService {
    private Student = [
        {
            id: 1,
            name: 'Arjun',
            age: 21,
            course: 'Computer Science',
        },
        {
            id: 2,
            name: 'Arjun',
            age: 21,
            course: 'Computer Science',
        },
        {
            id: 3,
            name: 'Arjun',
            age: 21,
            course: 'Computer Science',
        },
    ];

    getAllStudents() {
        return this.Student;
    }

    getStudentByid(id: string) {
        return this.Student.find((student) => student.id === parseInt(id));
    }

    addStudent(student: any) {
        this.Student.push(student);
        return this.Student;
    }

    updateStudent(id: string, data: any) {
        try {
            const student = this.Student.find((student) => student.id === parseInt(id));
            if (!student) {
                throw new NotFoundException('Student not found');
            }
            student.name = data.name || student.name;
            student.age = data.age || student.age;
            student.course = data.course || student.course;
            return student;
        } catch (error) {
            throw error;
        }
    }

    updateStudentCourse(id: string, course: string) {
        try {
            const student = this.Student.find((student) => student.id === parseInt(id));
            if (!student) {
                throw new NotFoundException('Student not found');
            }
            student.course = course || student.course;
            return student;
        } catch (error) {
            throw error;
        }
    }

    deleteStudent(id: string) {
        try {
            const student = this.Student.find((student) => student.id === parseInt(id));
            if (!student) {
                throw new NotFoundException('Student not found');
            }
            this.Student.splice(this.Student.indexOf(student), 1);
            return student;
        } catch (error) {
            throw error;
        }
    }
}
