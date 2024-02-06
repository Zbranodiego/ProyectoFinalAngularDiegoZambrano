import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeDirective } from './size.directive';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    SizeDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[SizeDirective,MatListModule,MatButtonModule,MatIconModule]
})
export class SharedModule { }
