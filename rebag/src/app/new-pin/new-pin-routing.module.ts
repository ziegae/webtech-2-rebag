import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPinPage } from './new-pin.page';

const routes: Routes = [
  {
    path: '',
    component: NewPinPage
  },
  {
    path: 'gps',
    loadChildren: () => import('./gps/gps.module').then( m => m.GpsPageModule)
  },
  {
    path: 'name',
    loadChildren: () => import('./name/name.module').then( m => m.NamePageModule)
  },
  {
    path: 'overview',
    loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPinPageRoutingModule {}
