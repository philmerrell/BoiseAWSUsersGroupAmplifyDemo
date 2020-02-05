import { Component } from '@angular/core';
import { APIService, ListVenuesQuery } from '../API.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  venues = { items: [] } as ListVenuesQuery;

  constructor(private api: APIService) {}

  async ionViewDidEnter() {
    this.venues = await this.api.ListVenues();
  }

}
