import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../../models/curso-interface';

@Component({
  selector: 'app-curso-dialog',
  templateUrl: './curso-dialog.component.html',
  styleUrl: './curso-dialog.component.scss'
})
export class CursoDialogComponent {
  courseForm:FormGroup;

  constructor(private fb:FormBuilder, private dialogRef:MatDialogRef<CursoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private editingCourse?:Course){
      this.courseForm=this.fb.group({
        name:this.fb.control('',Validators.required),
        date:this.fb.control('')
      })
      if(editingCourse){
        this.courseForm.patchValue(editingCourse)
      }
    }

    onSave():void{
      this.dialogRef.close(this.courseForm.value)
    }
}
