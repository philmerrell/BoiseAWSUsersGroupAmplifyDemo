import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VenuesPageRoutingModule } from './venues-routing.module';

import { VenuesPage } from './venues.page';
import { CreateOrUpdateVenueComponent } from './create-or-update-venue/create-or-update-venue.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    VenuesPageRoutingModule
  ],
  declarations: [VenuesPage, CreateOrUpdateVenueComponent ],
  entryComponents: [ CreateOrUpdateVenueComponent ]
})
export class VenuesPageModule {}
