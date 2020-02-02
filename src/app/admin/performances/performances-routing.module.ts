import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerformancesPage } from './performances.page';

const routes: Routes = [
  {
    path: '',
    component: PerformancesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformancesPageRoutingModule {}
