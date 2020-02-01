import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtistsPage } from './artists.page';

const routes: Routes = [
  {
    path: '',
    component: ArtistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistsPageRoutingModule {}
