import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import {Auth} from 'aws-amplify';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  signedIn: boolean;
  user: any;
  greeting: string;


  constructor(private amplifyService: AmplifyService) {
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.user = null;
        } else {
          this.user = authState.user;
          this.greeting = 'Hello ' + this.user.username;
        }
      });
  }

  signOut() {
    Auth.signOut();
  }
}
