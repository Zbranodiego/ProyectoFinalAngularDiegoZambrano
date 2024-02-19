import { TestBed } from "@angular/core/testing";
import { AuthService } from "./auth.service"
import {
    HttpClientTestingModule,
    HttpTestingController,
  } from '@angular/common/http/testing';
import { Users } from "../dashboard/pages/users/models";

describe('Pruebas de AuthService',()=>{
    let authService:AuthService;
    let httpController:HttpTestingController
    beforeEach(()=>{
        TestBed.configureTestingModule({
            providers:[authService],
            imports:[HttpClientTestingModule]
        })
        authService = TestBed.inject(AuthService);
        httpController=TestBed.inject(HttpTestingController)
    })

    it('AuthService debe estar definido',()=>{
        expect(authService).toBeTruthy();
    })

    it ('Al llamar login debe establecer un authUser',()=>{
        const User : Users[]=[
            {
                id : 1,
                name: 'Juan',
                lastname:'Peers',
                email:'Jpeeers@gmail.com',
                course:'frontend',
                password:'1384s',
                token:'5217'
            }
        ]

        authService.login({email:'Jpeeers@gmail.com',password:'1384s'}).subscribe({
            next:()=>{
                expect(authService.authUser).toEqual(User[0])
            }
        })
        httpController.expectOne({url:'http://localhost:3000/users?email=mock@mail.com&password=password',method:'get'}).flush(User);
    })

})