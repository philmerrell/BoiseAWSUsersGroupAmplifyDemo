import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/API.service';
import { ModalController } from '@ionic/angular';
import { CreateOrUpdatePerformanceComponent } from './create-or-update-performance/create-or-update-performance.component';

@Component({
  selector: 'app-performances',
  templateUrl: './performances.page.html',
  styleUrls: ['./performances.page.scss'],
})
export class PerformancesPage implements OnInit {
  performances = { items: [] };

  constructor(
    private api: APIService,
    private modalController: ModalController) { }

  ngOnInit() { }

  async ionViewDidEnter() {
    this.performances = await this.api.ListPerformances();
  }

  async createOrUpdatePerformance(performance?) {
    const modal = await this.modalController.create({
      component: CreateOrUpdatePerformanceComponent,
      componentProps: { performance }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.savePerformance(data);
    }
  }

  async savePerformance(data) {
    if (data.isUpdate) {
      const result = await this.api.UpdateVenue(data.performance);
      if (result) {
        this.updatePerformanceArray(result);
      }
    } else {
      this.api.CreatePerformance(data.performance);
    }
  }

  private updatePerformanceArray(update) {
    // Find location in local performances array, splice and replace.
    const itemIndex = this.performances.items.findIndex(performance => performance.id === update.id);
    if (itemIndex > -1) {
      this.performances.items.splice(itemIndex, 1, update);
    }
  }


}
