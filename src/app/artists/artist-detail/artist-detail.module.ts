import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArtistDetailPageRoutingModule } from './artist-detail-routing.module';

import { ArtistDetailPage } from './artist-detail.page';
import { TrustAsHtmlPipe } from 'src/app/trust-as-html.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArtistDetailPageRoutingModule
  ],
  declarations: [ArtistDetailPage, TrustAsHtmlPipe]
})
export class ArtistDetailPageModule {}
