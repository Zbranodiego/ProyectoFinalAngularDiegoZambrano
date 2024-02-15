import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../../layouts/auth/auth.service";

export const adminGuard:CanActivateFn = (route,state)=>{

    const router = inject(Router);
    const authService = inject (AuthService)
    return authService.authUser?.course === 'front-end' ? true : router.createUrlTree(['dashboard', 'users'])
}