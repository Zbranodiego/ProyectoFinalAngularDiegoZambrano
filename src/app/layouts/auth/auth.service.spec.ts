import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { Users } from '../dashboard/pages/users/models';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

describe('Testing de authService', () => {
    let authService: AuthService;
    let httpController: HttpTestingController
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthService],
            imports: [HttpClientTestingModule]
        });
        authService = TestBed.inject(AuthService);
        httpController = TestBed.inject(HttpTestingController)
    })

    it('AuthService debe estar definido', () => {
        expect(authService).toBeTruthy();
    })

    it('Al llamar al login debe establecer authuser', () => {
        const userFake: Users[] = [
            {
                id: 14747,
                name: 'Sal',
                lastname: 'Srein',
                email: 'salrein@gmail.com',
                course: 'front-end',
                password: '8790',
                token: 'sies52s',
            }
        ]
        authService.login({email:'salrein@gmail.com',password:'8790'})
        .subscribe({
            next:()=>{
                expect(authService.authUser).toEqual(userFake[0]);
            }
        });
        httpController.expectOne({
            url:'http://localhost:3000/users?email=salrein@gmail.com&password=8790',
            method:'get',
        }).flush(userFake)
    });
});