import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: Boolean = false;
  redirectUrl: string;

  constructor(private storage: StorageService, private router: Router) {}

  login(username, password): Promise<object> {
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (username === 'que' && password === 'password') {
          this.storage.write('token', 'XXX');
          return res();
        }
        return rej({message: 'Incorrect Credentials'});
      }, 2000);
    });
  }

  logout(): void {
    this.storage.remove('token');
    this.router.navigate(['login']);
  }
}
