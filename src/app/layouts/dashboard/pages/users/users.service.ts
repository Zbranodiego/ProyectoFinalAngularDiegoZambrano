import { Injectable } from "@angular/core";
import { Users } from "./models";
import { AlertsService } from "../../../../core/services/alert.service";
import { Observable, delay, of, tap } from "rxjs";



const CURSOS_DB: string[] = ['front-end', 'back-end', 'fullStack'];
let USERS_DB: Users[] = [];

@Injectable({ providedIn: 'root' })
export class UsersService {
    constructor(private alerts: AlertsService) { }

    getUserById(id: number): Observable<Users | undefined> {
        return of(USERS_DB.find((user) => user.id === id)).pipe(delay(2000))
    }

    getCourse(): Observable<string[]> {
        return of(CURSOS_DB).pipe(delay(1500))
    }

    getUsers() {
        return of(USERS_DB).pipe(delay(2000));
    }

    createUser(payload: Users) {
        USERS_DB.push(payload);
        return this.getUsers()
    }

    deleteUser(UserID: number) {
        USERS_DB = USERS_DB.filter((user) => user.id !== UserID)
        return this.getUsers().pipe(tap(() => this.alerts.showSuccess('Usuario eliminado', '')));
    }

}