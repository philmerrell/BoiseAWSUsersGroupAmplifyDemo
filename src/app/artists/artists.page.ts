import { Component } from '@angular/core';
import { ArtistsService } from './artists.service';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-artists',
  templateUrl: 'artists.page.html',
  styleUrls: ['artists.page.scss']
})
export class ArtistsPage {
  artists = { items: [] };
  signedIn: boolean;
  user: any;
  viewIsReady: boolean;


  constructor(
    private artistsService: ArtistsService,
    private authService: AuthService) {}

  async ionViewDidEnter() {
    this.signedIn = await this.authService.isAuthenticated().toPromise();
    this.artists = await this.artistsService.listArtists();
  }

  setViewIsReady(event) {
    console.log(event);
    this.viewIsReady = true;
  }

  signOut() {
    this.authService.signOut();
  }


}
