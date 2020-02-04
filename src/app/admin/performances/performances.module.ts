import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerformancesPageRoutingModule } from './performances-routing.module';

import { PerformancesPage } from './performances.page';
import { CreateOrUpdatePerformanceComponent } from './create-or-update-performance/create-or-update-performance.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PerformancesPageRoutingModule
  ],
  declarations: [PerformancesPage, CreateOrUpdatePerformanceComponent ],
  entryComponents: [ CreateOrUpdatePerformanceComponent ]
})
export class PerformancesPageModule {}
