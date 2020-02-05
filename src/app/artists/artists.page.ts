import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';
import { APIService } from '../API.service';

@Component({
  selector: 'app-artists',
  templateUrl: 'artists.page.html',
  styleUrls: ['artists.page.scss']
})
export class ArtistsPage {
  signedIn: boolean;
  user: any;
  artists = { items: [] };


  constructor(
    private api: APIService,
    private amplifyService: AmplifyService) {
    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.signedIn = authState.state === 'signedIn';
        if (!authState.user) {
          this.user = null;
        } else {
          this.user = authState.user;
        }
      });
  }

  async ionViewDidEnter() {
    this.artists = await this.api.ListArtists();
  }

  signOut() {
    Auth.signOut();
  }
}
