import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Inscription, InscriptionsData } from "./models";
import { environment } from "../../../../../environments/environment";
import { Users } from "../users/models";
import { catchError, concatMap, throwError } from "rxjs";
@Injectable({providedIn:'root'})

export class InscriptionsService{
    constructor(private http:HttpClient){}

    getInscriptions(){
        return this.http.get<Inscription[]>(
            `${environment.apiUrl}/inscriptions?_embed=user&_embed=course`
        )
    }

    getinscriptionsById(userId:string | number){
        return this.http.get<Users>(`${environment.apiUrl}/users/${userId}`)
        .pipe(concatMap((user)=>this.http.get(`${environment.apiUrl}/inscriptions?userId=${user.id}`)),
        catchError((error)=>{
            alert('Algo salio mal')
            return throwError(()=>error)
        })
        )
    }

    createInscription(data:InscriptionsData){
        return this.http.post<Inscription>(`${environment.apiUrl}/inscriptions`, data);
    }
}