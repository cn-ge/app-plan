import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable({ providedIn: 'root' })
export class OnlyPedagGuard implements CanActivate {
 

    constructor(
        private router: Router
    ) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (JSON.parse(sessionStorage.getItem('user')).role_id == '2'
            || JSON.parse(sessionStorage.getItem('user')).role_id == '3'
            || JSON.parse(sessionStorage.getItem('user')).role_id == '4' ) {
            return true;
        }
 
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/unauthorized']);
        return false;
    }
}