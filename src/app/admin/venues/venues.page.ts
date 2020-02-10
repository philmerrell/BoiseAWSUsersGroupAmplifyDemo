import { Component, OnInit } from '@angular/core';
import { APIService } from '../../API.service';
import { ModalController } from '@ionic/angular';
import { CreateOrUpdateVenueComponent } from './create-or-update-venue/create-or-update-venue.component';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.page.html',
  styleUrls: ['./venues.page.scss'],
})
export class VenuesPage {
  venues = { items: [] };

  constructor(
    private api: APIService,
    private modalController: ModalController) { }


  async ionViewDidEnter() {
    this.venues = await this.api.ListVenues();
  }

  async createOrUpdateVenue(venue?) {
    const modal = await this.modalController.create({
      component: CreateOrUpdateVenueComponent,
      componentProps: { venue }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.saveVenue(data);
    }
  }

  async saveVenue(data) {
    if (data.isUpdate) {
      console.log(data.venue);
      const result = await this.api.UpdateVenue(data.venue);
      if (result) {
        this.updateVenueArray(result);
      }
    } else {
      this.api.CreateVenue(data.venue);
    }
  }

  private updateVenueArray(update) {
    // Find location in local venue array, splice and replace.
    const itemIndex = this.venues.items.findIndex(venue => venue.id === update.id);
    if (itemIndex > -1) {
      this.venues.items.splice(itemIndex, 1, update);
    }
  }

}
