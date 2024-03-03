import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { Users } from './pages/users/models';
import { Store } from '@ngrx/store';
import { selectAuthUser } from '../../core/store/auth/selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;

  authUser$:Observable<Users| null>
  constructor(private authService:AuthService,
    private store:Store){
      this.authUser$ = this.store.select(selectAuthUser)
    }

  logOut():void{
    this.authService.logOut();
  }
}
