import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,MatSidenavModule,MatButtonModule,
    MatToolbarModule,MatIconModule,UsersModule,SharedModule,
    RouterModule.forChild([
      {
        path:'users',
        component:UsersComponent
      },
      {
        path:'cursos',
        loadChildren:()=>import('./pages/cursos/cursos.module').
        then((m)=>m.CursosModule)
        
      },
      {
        path:'**',
        redirectTo:'users'
      }
    ])
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
