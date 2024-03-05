import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { adminGuard } from '../../core/guards/admin.guard';
@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule, MatSidenavModule, MatButtonModule,
    MatToolbarModule, MatIconModule, UsersModule, SharedModule,
    RouterModule.forChild([
      {
        path: 'users',
        canActivate:[adminGuard],
        loadChildren:()=>import('./pages/users/users.module')
        .then((m)=>m.UsersModule)
      },
      {
        path: 'cursos',
        loadChildren: () => import('./pages/cursos/cursos.module').
          then((m) => m.CursosModule)

      },
      {
        path:'inscriptions',
        loadChildren:()=>import('./pages/inscriptions/inscriptions.module').
        then((m)=>m.InscriptionsModule)
      },
      {
        path: '**',
        redirectTo: 'users'
      }
    ])
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
