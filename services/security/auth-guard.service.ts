import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import {LoginServiceService} from "./login-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {


  constructor(private router: Router,
              private login: LoginServiceService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.login.loggin()){
      return true
    } else {
      this.router.navigateByUrl('/')
    }
    return false
  }
}
