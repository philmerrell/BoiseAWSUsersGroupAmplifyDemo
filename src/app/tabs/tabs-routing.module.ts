import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'artists',
        children: [
          {
            path: '',
            loadChildren: () => import('../artists/artists.module').then(m => m.ArtistsPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('../artists/artist-detail/artist-detail.module').then( m => m.ArtistDetailPageModule)
          }
        ],
        canActivate: [ AuthGuard ]
      },
      {
        path: 'schedule',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../schedule/schedule.module').then(m => m.SchedulePageModule)
          }
        ],
        canActivate: [ AuthGuard ]
      },
      {
        path: 'venues',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ],
        canActivate: [ AuthGuard ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      },
      {
        path: 'login',
        loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/artists',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ AuthGuard ]
})
export class TabsPageRoutingModule {}
