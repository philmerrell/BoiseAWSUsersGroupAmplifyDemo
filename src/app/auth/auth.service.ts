import { Injectable } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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


}
