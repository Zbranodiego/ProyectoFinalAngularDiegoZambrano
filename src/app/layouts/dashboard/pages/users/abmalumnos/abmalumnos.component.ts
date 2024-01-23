import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-abmalumnos',
  templateUrl: './abmalumnos.component.html',
  styleUrl: './abmalumnos.component.scss'
})
export class AbmalumnosComponent {
  
  abmform:FormGroup;
  @Output()
  enviarAlumno = new EventEmitter()

  constructor(private fb:FormBuilder){
    this.abmform = this.fb.group({
      name:this.fb.control('',Validators.required),
      lastname:this.fb.control('',Validators.required),
      email:this.fb.control('',Validators.required),
      course:this.fb.control('',Validators.required)
    })
  }
  
  enviarForm():void{
    if(this.abmform.invalid){
      this.abmform.markAllAsTouched();
    }else{
      this.enviarAlumno.emit(this.abmform.value);
      this.abmform.reset();
    }
  }
}
