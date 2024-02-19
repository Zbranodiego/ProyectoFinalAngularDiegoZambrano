import { TestBed } from "@angular/core/testing";
import { LoginComponent } from './login.component';
import { SharedModule } from "../../../shared/shared.module";
import {MockProvider} from 'ng-mocks'
import { AuthService } from "../auth.service";
import { Validators } from "@angular/forms";

describe ('Componente de logueo',()=>{
    let component: LoginComponent;

    beforeEach(()=>{
        TestBed.configureTestingModule({
            declarations:[LoginComponent],
            imports:[SharedModule],
            providers:[MockProvider(AuthService)],
        })
        component = TestBed.createComponent(LoginComponent).componentInstance
    })


    it('Validar email y contraseña', ()=>{
        expect(component.loginForm.get('password')?.hasValidator(Validators.required)).toBeTrue();
    })

    it('Validar campos del formulario login una vez presionado  el boton ingresar sin completar los datos',
    ()=>{
        component.loginForm.patchValue({
            email:'',
            password:''
        });
        expect(component.loginForm.invalid).toBeTrue();
        const spyOnMarkAllAsTouched = spyOn(component.loginForm,'markAllAsTouched');
        component.onSubmit();
        expect(spyOnMarkAllAsTouched).toHaveBeenCalled();
    })
})