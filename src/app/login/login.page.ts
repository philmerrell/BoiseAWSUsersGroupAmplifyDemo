import { Component, OnInit, OnDestroy } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnDestroy {
  authSubscription: Subscription;

  constructor(private amplifyService: AmplifyService, private router: Router) {
  }

  ionViewDidEnter() {
    this.subscribeToAuthState();
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  subscribeToAuthState() {
    this.authSubscription = this.amplifyService.authStateChange$
      .subscribe(authState => {
        if (authState.state === 'signedIn') {
          this.router.navigateByUrl('/tabs/artists', { replaceUrl: true });
        }
      });
  }

}
