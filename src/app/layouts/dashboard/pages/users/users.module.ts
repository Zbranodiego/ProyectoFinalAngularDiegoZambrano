import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AbmalumnosComponent } from './abmalumnos/abmalumnos.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { SharedModule } from '../../../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UsersService } from './users.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UsersComponent,
    AbmalumnosComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatButtonModule,MatTableModule,SharedModule,
    UsersRoutingModule,RouterModule
  ],
  exports:[UsersComponent],
  providers:[UsersService]
})
export class UsersModule { }
