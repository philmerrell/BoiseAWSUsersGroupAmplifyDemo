import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPage } from './admin.page';

const routes: Routes = [
  {
    path: '',
    component: AdminPage
  },
  {
    path: 'artists',
    loadChildren: () => import('./artists/artists.module').then( m => m.ArtistsPageModule)
  },
  {
    path: 'venues',
    loadChildren: () => import('./venues/venues.module').then( m => m.VenuesPageModule)
  },
  {
    path: 'genres',
    loadChildren: () => import('./genres/genres.module').then( m => m.GenresPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPageRoutingModule {}
