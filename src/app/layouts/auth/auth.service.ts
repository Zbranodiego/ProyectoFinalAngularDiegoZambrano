import { Injectable } from "@angular/core";
import { Users } from "../dashboard/pages/users/models";
import { Router } from "@angular/router";
import { AlertsService } from '../../core/services/alert.service';
import { LoginData } from "./login/models/login-data";
import { Observable, map, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({providedIn:'root'})
export class AuthService{
    authUser: Users | null = null;
    constructor(private router:Router, private alertsService:AlertsService,
                private httpClient:HttpClient){}

    private setAuthUser(user:Users):void{
        this.authUser = user;
        localStorage.setItem('token',user.token)
    }

    login(data:LoginData):Observable<Users[]>{
        return this.httpClient.get<Users[]>(
            `${environment.apiUrl}/users?email=${data.email}&password=${data.password}`)
            .pipe(tap((response)=>{
                if (!!response[0]){
                    this.setAuthUser(response[0]);
                    this.router.navigate(['dashboard','home']);
                }else{
                    this.alertsService.showError('Email o  contraseña incorrecta');
                }
            }))
    }

    logOut():void{
        this.authUser=null;
        this.router.navigate(['auth','login']);
        localStorage.removeItem('token')
    }

    verifyToken(){
        return this.httpClient.get<Users[]>(
            `${environment.apiUrl}/users?token=${localStorage.getItem('token')}`)
            .pipe(map(response =>{
                if (response.length){
                    this.setAuthUser(response[0]);
                    return true;
                }else{
                    this.authUser=null;
                    localStorage.removeItem('token');
                    return false
                }
            }))
    }


    
  


}