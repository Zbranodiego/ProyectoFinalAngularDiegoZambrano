import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscriptionsRoutingModule } from './inscriptions-routing.module';
import { InscriptionsComponent } from './inscriptions.component';
import { EffectsModule } from '@ngrx/effects';
import { InscriptionsEffects } from './store/inscriptions.effects';
import { StoreModule } from '@ngrx/store';
import { inscriptionsFeature } from './store/inscriptions.reducer';
import { SharedModule } from '../../../../shared/shared.module';
import { InscriptionsDialogComponent } from './components/inscriptions-dialog/inscriptions-dialog.component';
import { CursosService } from '../cursos/cursos.service';


@NgModule({
  declarations: [
    InscriptionsComponent,
    InscriptionsDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InscriptionsRoutingModule,
    EffectsModule.forFeature([InscriptionsEffects]),
    StoreModule.forFeature(inscriptionsFeature)
  ],
  providers:[CursosService]
})
export class InscriptionsModule { }
