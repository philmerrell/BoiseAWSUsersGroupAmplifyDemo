import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GenresPage } from './genres.page';

const routes: Routes = [
  {
    path: '',
    component: GenresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenresPageRoutingModule {}
