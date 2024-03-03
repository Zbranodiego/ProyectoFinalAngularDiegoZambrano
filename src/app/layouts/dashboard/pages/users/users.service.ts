import { Injectable } from "@angular/core";
import { Users } from "./models";
import { AlertsService } from "../../../../core/services/alert.service";
import { Observable, catchError, delay, mergeMap, of, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../../environments/environment";
import { Pagination } from "../../../../core/models";



const CURSOS_DB: string[] = ['front-end', 'back-end', 'fullStack'];


@Injectable({ providedIn: 'root' })
export class UsersService {
    constructor(private alerts: AlertsService,
        private httpclient: HttpClient) { }


    generateString(lenght: number) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxyz0123456789';
        let result = '';
        const charactersLenght = characters.length;
        for(let i =0 ; i < lenght; i++){
            result += characters.charAt(Math.floor(Math.random()*charactersLenght))
        }
        return result;
    }


    getUserById(id: number): Observable<Users | undefined> {
        return this.httpclient.get<Users>(`${environment.apiUrl}/users/${id}`)
    }

    getCourse(): Observable<string[]> {
        return of(CURSOS_DB).pipe(delay(1500))
    }

    getUsers() {
        return this.httpclient.get<Users[]>(
            `${environment.apiUrl}/users`).
        pipe(catchError((error)=>{
            this.alerts.showError('Error al cargar usarios');
            return of ([])
        }))
    }
    
    paginate(page:number,perpage = 5){
        return this.httpclient.get<Pagination<Users>>(
            `${environment.apiUrl}/users?_page=${page}&_per_page=${perpage}`
        )
    }

    createUser(payload: Users) {
       return this.httpclient.post<Users>(
        `${environment.apiUrl}/users`,{...payload,
        token:this.generateString(5)}
       ).pipe(mergeMap(()=>this.getUsers()))
    }

    deleteUser(userID: number) {
       return this.httpclient.delete<Users>(
        `${environment.apiUrl}/users/${userID}`)
        .pipe(mergeMap(()=>this.getUsers()))
    }

    getAllStudents(): Observable<Users[]> {
        return this.httpclient.get<Users[]>(
            `${environment.apiUrl}/users?course=front-end`
        )
    }

}