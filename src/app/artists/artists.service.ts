import { Injectable } from '@angular/core';
import { APIService } from '../API.service';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  artists = { items: [] };
  constructor(private api: APIService) { }

  async listArtists() {
    if (!this.artists.items.length) {
      this.artists = await this.api.ListArtists();
      return this.artists;
    } else {
      return this.artists;
    }
  }
}
