import { Component, OnInit } from '@angular/core';
import { GetTeachersService } from './services/get-teachers.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
})
export class TeacherComponent implements OnInit {
  teachers: any = [];

  constructor(private getTeachers: GetTeachersService) {}

  ngOnInit(): void {
    this.getTeachers.get().subscribe((response: any) => {
      this.teachers = response;
    });
  }
}
