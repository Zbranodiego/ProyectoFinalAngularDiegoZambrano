import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDialogComponent } from './components/curso-dialog/curso-dialog/curso-dialog.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosService } from './cursos.service';
import { SharedModule } from '../../../../shared/shared.module';




@NgModule({
  declarations: [
    CursosComponent,
    CursoDialogComponent
  ],
  imports: [
    CommonModule,SharedModule,CursosRoutingModule
  ],
  providers:[CursosService]
})
export class CursosModule { }
