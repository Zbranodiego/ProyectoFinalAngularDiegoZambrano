import { Component } from '@angular/core';
import { Course } from './models/curso-interface';
import { CursosService } from './cursos.service';
import { MatDialog } from '@angular/material/dialog';
import { CursoDialogComponent } from './components/curso-dialog/curso-dialog/curso-dialog.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

  displayedColumns = ['id', 'name', 'date', 'actions'];

  courses: Course[] = []

  constructor(private cursosService: CursosService, public dialog: MatDialog) {

    this.cursosService.getCuourse().subscribe({
      next: (courses) => {
        this.courses = courses
      }
    })
  }

  onCreate(): void {
    this.dialog.open(CursoDialogComponent).afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            this.cursosService.createCourse(result)
              .subscribe({
                next: (courses) => (this.courses = courses),
              })
          }
        }
      })
  }

  onEdit(course:Course){
    this.dialog.open(CursoDialogComponent,{
      data:course
    }).afterClosed().subscribe({
      next: (result) => {
        if(result){
          this.cursosService.updateCourseById(course.id,result).subscribe({
            next:(courses)=>(this.courses=courses)
          })
        }
      }
    })
  }
  onDelete(id:number):void{
    if(confirm('esta seguro de eliminar?')){
      this.cursosService.deleteCourseById(id).subscribe({
        next:(courses)=>{
          this.courses = courses
        }
      })
    }
  }
}
