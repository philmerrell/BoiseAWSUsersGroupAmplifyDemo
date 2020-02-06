import { Component } from '@angular/core';
import { APIService } from '../API.service';

@Component({
  selector: 'app-schedule',
  templateUrl: 'schedule.page.html',
  styleUrls: ['schedule.page.scss']
})
export class SchedulePage {

  performances = { items: [] };

  constructor(private api: APIService) {}

  async ionViewDidEnter() {
    this.performances = await this.api.ListPerformances();
  }
}
