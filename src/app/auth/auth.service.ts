import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Observable, from, BehaviorSubject, of } from 'rxjs';
import Amplify, { Auth } from 'aws-amplify';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject(false);
  user;
  signedIn;

  constructor(private amplifyService: AmplifyService) {

    this.amplifyService.authStateChange$
      .subscribe(authState => {
        console.log(authState);
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.user = null;
        } else {
          this.user = authState.user;
        }
      });
  }

  getAuthState() {
    return this.amplifyService.authStateChange$;
  }

  getUserPoolGroups(user) {
    return user.signInUserSession.accessToken.payload['cognito:groups'];
  }

  public isAuthenticated(): Observable<boolean> {
    return from(Auth.currentAuthenticatedUser())
      .pipe(
        map(result => {
          this.loggedIn.next(true);
          return true;
        }),
        catchError(error => {
          this.loggedIn.next(false);
          return of(false);
        })
      );
  }


}
