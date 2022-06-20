import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from './Services/authguard-service.service';
import { Router } from '@angular/Router';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    private AuthguardService: AuthguardServiceService,
    private router: Router
  ) {}

  canActivate(): boolean {
    return true;
  }
  // canActivate(): boolean {
  //   if (this.AuthguardService.getToken()) {
  //     this.router.navigate(['/login']);
  //   }
  //   return this.AuthguardService.getToken();
  // }
}
