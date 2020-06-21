import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usersSaved: Array<IUser> = [{name: '', email: '', pass: ''}];
  userLogged;

  constructor() { }

  register(value: any) {
    console.log('values', value);
    return new Observable ( registerObserver => {
      this.usersSaved.push ({
        name: value.name,
        email: value.email,
        pass: value.password,
      });

      console.log('insert ', this.usersSaved);
      registerObserver.next(true);

    });
  }

  login(email, password) {
    const objectFound = this.usersSaved.find( e => e.email === email);
    console.log('resilt', objectFound);
    return new Observable ( loginObserver => {
      if (objectFound) {
        if ( password === objectFound.pass ) {
          this.userLogged = objectFound;
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
