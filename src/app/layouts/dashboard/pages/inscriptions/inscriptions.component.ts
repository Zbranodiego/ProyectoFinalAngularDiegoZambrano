import { Component, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { Inscription } from './models';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { selectInscription, selectinscriptionsIsloading } from './store/inscriptions.selectors';
import { InscriptionsActions } from './store/inscriptions.actions';
import { InscriptionsDialogComponent } from './components/inscriptions-dialog/inscriptions-dialog.component';

@Component({
  selector: 'app-inscriptions',
  templateUrl: './inscriptions.component.html',
  styleUrl: './inscriptions.component.scss'
})
export class InscriptionsComponent implements OnDestroy {

  inscriptions:Inscription[]=[]
  isloading$: Observable<boolean>
  
  inscriptionSubscription?:Subscription;

  destroyed$ = new Subject();

  constructor (private store:Store,
    private matDialog:MatDialog){
      this.store.select(selectInscription).pipe
      (takeUntil(this.destroyed$)).subscribe({
        next:(inscriptions)=>{this.inscriptions = inscriptions}})
        
        this.isloading$= this.store.select(selectinscriptionsIsloading)
        this.store.dispatch(InscriptionsActions.loadInscriptions())
    }
    createInscription():void{
      this.matDialog.open(InscriptionsDialogComponent)
      
    }

    ngOnDestroy():void{
      this.destroyed$.next(true);
      this.destroyed$.complete()
    }

}
