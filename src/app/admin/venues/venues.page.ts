import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { ModalController } from '@ionic/angular';
import { CreateOrUpdateVenueComponent } from './create-or-update-venue/create-or-update-venue.component';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.page.html',
  styleUrls: ['./venues.page.scss'],
})
export class VenuesPage implements OnInit {
  venues = { items: [] };

  constructor(
    private api: APIService,
    private modalController: ModalController) { }

    ngOnInit() {}

    async ionViewDidEnter() {
      this.venues = await this.api.ListVenues();
    }
  
    async createOrUpdateVenue(Venue?) {
      const modal = await this.modalController.create({
        component: CreateOrUpdateVenueComponent,
        componentProps: { Venue }
      });
      await modal.present();
  
      const { data } = await modal.onWillDismiss();
      if (data) {
        this.saveVenue(data);
      }
    }
  
    async saveVenue(data) {
      if (data.isUpdate) {
        const result = await this.api.UpdateVenue(data.venue);
        if (result) {
          this.updateVenueArray(result);
        }
      } else {
        this.api.CreateVenue(data.Venue);
      }
      // this.api.CreateVenue(data);
    }
  
    private updateVenueArray(update) {
      // Find location in Venue array, splice and replace.
      let itemIndex = this.venues.items.findIndex(venue => venue.id === update.id);
      console.log(itemIndex);
      if (itemIndex > -1) {
        this.venues.items.splice(itemIndex, 1, update);
      }
    }

}
