import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SizeDirective } from './size.directive';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ValidationErrorsPipe } from './validation-errors.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
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
    ValidationErrorsPipe,MatDialogModule,
    MatSelectModule,MatPaginatorModule,
    MatTableModule,MatDatepickerModule]
})
export class SharedModule { }
