import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArtistsPage } from './artists.page';
import { AmplifyIonicModule, AmplifyAngularModule } from 'aws-amplify-angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ArtistsPage }])
  ],
  declarations: [ArtistsPage]
})
export class ArtistsPageModule {}
