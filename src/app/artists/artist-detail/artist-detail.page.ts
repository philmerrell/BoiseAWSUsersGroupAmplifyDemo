import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.page.html',
  styleUrls: ['./artist-detail.page.scss'],
})
export class ArtistDetailPage implements OnInit {
  artist;
  artistId: Observable<string>;

  constructor(
    private api: APIService,
    private route: ActivatedRoute) {
      this.artistId = this.route.params.pipe(map(p => p.id));
    }

  ngOnInit() {}

  async ionViewDidEnter() {
    this.artistId.subscribe(async id => {
      this.artist = await this.api.GetArtist(id);
    });
  }

}
