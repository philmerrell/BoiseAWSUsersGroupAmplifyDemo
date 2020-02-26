import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { ModalController } from '@ionic/angular';
import { CreateOrUpdateArtistComponent } from './create-or-update-artist/create-or-update-artist.component';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.page.html',
  styleUrls: ['./artists.page.scss'],
})
export class ArtistsPage implements OnInit {
  artists = { items: [] };

  constructor(
    private api: APIService,
    private modalController: ModalController) { }

  ngOnInit() { }

  async ionViewDidEnter() {
    this.artists = await this.api.ListArtists();
  }

  async createOrUpdateArtist(artist?) {
    const modal = await this.modalController.create({
      component: CreateOrUpdateArtistComponent,
      componentProps: { artist }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.saveArtist(data);
    }
  }

  async saveArtist(data) {
    if (data.isUpdate) {
      const result = await this.api.UpdateArtist(data.artist);
      if (result) {
        this.updateArtistArray(result);
      }
    } else {
      const result = await this.api.CreateArtist(data.artist);
      console.log(result);
      this.artists.items.unshift(result);
    }
    // this.api.CreateArtist(data);
  }

  private updateArtistArray(update) {
    // Find location in artist array, splice and replace.
    const itemIndex = this.artists.items.findIndex(artist => artist.id === update.id);
    console.log(itemIndex);
    if (itemIndex > -1) {
      this.artists.items.splice(itemIndex, 1, update);
    }
  }



}
