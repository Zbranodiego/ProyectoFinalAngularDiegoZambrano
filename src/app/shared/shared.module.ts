import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeDirective } from './size.directive';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorsPipe } from './validation-errors.pipe';


@NgModule({
  declarations: [
    SizeDirective,
    ValidationErrorsPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    SizeDirective,MatListModule,
    MatButtonModule,MatIconModule,
    MatCardModule, MatFormFieldModule,
    MatInputModule,ReactiveFormsModule,
    ValidationErrorsPipe]
})
export class SharedModule { }
