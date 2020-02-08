import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanLoad {

  constructor(private authService: AuthService) {}


  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {

      // return of(true);
      // return this.authService.getAuthState().pipe(
      //   switchMap(authState => {
      //     const userGroups = this.getUserPoolGroups(authState.user);
      //     console.log('User groups', userGroups);
      //     if (userGroups.indexOf('Admins') !== -1) {
      //       console.log('true');
      //       // return true;
      //       return of(true);
      //     } else {
      //       return of(false);
      //     }
      //   }));

      this.authService.getAuthState().toPromise();
      return true;
  }

  getUserPoolGroups(user) {
    return user.signInUserSession.accessToken.payload['cognito:groups'];
  }
}
