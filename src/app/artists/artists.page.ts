import { Component } from '@angular/core';
import { AmplifyService } from 'aws-amplify-angular';
import { Auth } from 'aws-amplify';
import { APIService } from '../API.service';
import { ArtistsService } from './artists.service';

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
    private artistsService: ArtistsService,
    private amplifyService: AmplifyService) {
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

  async ionViewDidEnter() {
    this.artists = await this.artistsService.listArtists();
  }

  signOut() {
    Auth.signOut();
  }
}
