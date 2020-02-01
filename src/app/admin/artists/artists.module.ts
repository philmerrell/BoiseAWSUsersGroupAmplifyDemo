import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistsPageRoutingModule } from './artists-routing.module';

import { ArtistsPage } from './artists.page';
import { CreateOrUpdateArtistComponent } from './create-or-update-artist/create-or-update-artist.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ArtistsPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ArtistsPage, CreateOrUpdateArtistComponent ],
  entryComponents: [ CreateOrUpdateArtistComponent ]
})
export class ArtistsPageModule {}
