import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  userLogged = null;

  constructor( private router: Router ) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let authInfo = {
      authenticated: false
    };


    if ( this.userLogged ) {
      authInfo = {
        authenticated: true
      };

    } else {
      authInfo = {
        authenticated: false
      };
    }


    if (!authInfo.authenticated) {
      this.router.navigate(['login']);
      return false;
    }

    return true;
  }
}
