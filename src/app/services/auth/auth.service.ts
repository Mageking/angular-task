import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import {promise} from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: Boolean = false;
  redirectUrl: string;

  login(username, password): Promise<object> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (username === 'que' && password === 'password') {
          return res();
        }
        return rej({message: 'Incorrect Credentials'});
      }, 2000);
    });
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
