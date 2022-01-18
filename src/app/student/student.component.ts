import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { calculateAge } from '../shared/util/calculateAge';
import { ModalComponent } from './components/modal/modal.component';
import { GetStudentsService } from './services/get-students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: any = []
  displayedColumns = ['name', 'age', 'patronus', 'image']
  @ViewChild(MatTable, {static:true}) table!: MatTable<any>
  
  constructor(private getStudents: GetStudentsService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getStudents.get()
      .subscribe((response: any) => {
        this.students = response
      })
  }

  onClick(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      const {dateOfBirth, ...rest} = result
      const date = new Date(dateOfBirth)

      // formateamos la edad para que concuerde con lo que pide la funcion
      const newStudent = {
        age: calculateAge(`${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`),
        ...rest
      }

      // luego agregamos el nuevo estudiante y refrescamos la tabla
      this.students.unshift(newStudent);
      this.table.renderRows();
    });
  }
}
