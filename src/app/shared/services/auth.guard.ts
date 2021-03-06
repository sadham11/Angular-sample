import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Injectable } from '@angular/core';
// import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor( private router: Router) {}
    // constructor(private authService: AuthService, private router: Router) {}
    async canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // let currentUser = await this.authService.getUser();

        // if (!this.authService.getToken()) {
        //     this.router.navigate(['/user/login']);
        // }

        // if (currentUser) {
        //     if (route.data && route.data.roles) {
        //         if (route.data.roles.includes(currentUser.role)) {
        //             return true;
        //         } else {
        //             this.router.navigate(['/unauthorized']);
        //             return false;
        //         }
        //     } else {
        //         if (localStorage.getItem('org')) {
        //             // console.log('org found');
        //             return true;
        //         } else {
        //             // console.log('org not found');
        //             // this.router.navigate(['app/select-org']);
        //             this.router.navigate(['select-org']);
        //             return true;
        //         }
        //     }
        // } else {
        //     alert("navigate(['/user/login'])");
        //     this.router.navigate(['/user/login']);
        //     return false;
        // }
        return true;
    }
    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        // let currentUser = await this.authService.getUser();

        // if (!this.authService.getToken()) {
        //     this.router.navigate(['/user/login']);
        // }

        // if (currentUser) {
        //     if (route.data && route.data.roles) {
        //         if (route.data.roles.includes(currentUser.role)) {
        //             return true;
        //         } else {
        //             this.router.navigate(['/unauthorized']);
        //             return false;
        //         }
        //     } else {
        //         return true;
        //     }
        // } else {
        //     this.router.navigate(['/user/login']);
        //     return false;
        // }
        return true;
    }
}
