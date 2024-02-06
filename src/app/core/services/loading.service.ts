import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn:'root'})
export class LoadingService {
    private loadingTriggered$ = new BehaviorSubject<boolean>(false);

    public isloading$ = this.loadingTriggered$.asObservable()
    
    setIsloading(value:boolean):void{
            this.loadingTriggered$.next(value)
    }
}