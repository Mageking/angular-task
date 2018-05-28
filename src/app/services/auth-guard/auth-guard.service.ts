import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { StorageService } from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router,
              private storage: StorageService
  ) {}

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const redirectUrl: string = state.url;
    return this.checkLogin(redirectUrl);
  }

  checkLogin(url: string): boolean {
    if (this.storage.read('token')) { return true; }
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
