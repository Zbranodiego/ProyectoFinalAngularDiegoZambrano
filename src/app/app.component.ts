import { Component } from '@angular/core';
import { LoadingService } from './core/services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-Entrega1-DiegoZambrano';

  isLoading = false;

  constructor(private loadingService:LoadingService){
    this.loadingService.isloading$.subscribe({
      next:(value)=>{
        setTimeout(()=>{
          this.isLoading = value
        })
      }
    })
  }
}
