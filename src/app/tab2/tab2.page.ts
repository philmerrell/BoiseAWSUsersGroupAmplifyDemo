import { Component } from '@angular/core';
import { APIService } from '../API.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  performances = { items: [] };

  constructor(private api: APIService) {}

  async ionViewDidEnter() {
    this.performances = await this.api.ListPerformances();
  }
}
