import { Injectable } from '@angular/core';
import { AuthGuardService } from '../folder/share/services/auth-guard.service';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usersSaved: Array<IUser> = [{name: 'Diego', email: 'diego@yuxi.com', pass: 'diego123'}];
  

  constructor(private authGuard: AuthGuardService) { }

  register(value: any) {
    return new Observable ( registerObserver => {
      this.usersSaved.push ({
        name: value.name,
        email: value.email,
        pass: value.password,
      });

      registerObserver.next(true);

    });
  }

  login(email, password) {
    const objectFound = this.usersSaved.find( e => e.email === email);
    return new Observable ( loginObserver => {
      if (objectFound) {
        if ( password === objectFound.pass ) {
          this.authGuard.userLogged = objectFound;
          loginObserver.next(true);
        } else {
          loginObserver.next(false);
        }
      } else {
        loginObserver.next(false);
      }
    });
  }
}

export interface IUser {
  name;
  email;
  pass;
}
