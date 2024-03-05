import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../../../users/models';
import { Course } from '../../../cursos/models/curso-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MatDialogRef } from '@angular/material/dialog';
import { InscriptionsActions } from '../../store/inscriptions.actions';
import { selectinscriptionsCourses, selectinscriptionsStudents } from '../../store/inscriptions.selectors';

@Component({
  selector: 'app-inscriptions-dialog',
  templateUrl: './inscriptions-dialog.component.html',
  styleUrl: './inscriptions-dialog.component.scss'
})
export class InscriptionsDialogComponent {

  students$:Observable<Users[]>;
  courses$:Observable<Course[]>;
  inscriptionForm: FormGroup;


  constructor(
    private store: Store,
    private formbuilder:FormBuilder,
    private matdialogRef:MatDialogRef<InscriptionsDialogComponent>
  ) {

    this.inscriptionForm = this.formbuilder.group({
      courseId:this.formbuilder.control('',Validators.required),
      userId:this.formbuilder.control('', Validators.required) 
    })

    this.store.dispatch(InscriptionsActions.loadStudent())
    this.store.dispatch(InscriptionsActions.loadCourses());

    this.courses$ = this.store.select(selectinscriptionsCourses);
    this.students$ = this.store.select(selectinscriptionsStudents)
  }

  onSubmit():void{
    if (this.inscriptionForm.invalid){
      this.inscriptionForm.markAllAsTouched();
    }else{
      this.store.dispatch(
        InscriptionsActions.createInscription({data:this.inscriptionForm.value})
      )
      this.matdialogRef.close()
    }
  }
}
