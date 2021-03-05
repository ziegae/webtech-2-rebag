import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';

import { PinPage } from './pin.page';

const routes: Routes = [
  {
    path: '',
    component: PinPage
  },
  {
    path: ':pinId',
    loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule)
  },
  {
    path: 'reset-clean',
    loadChildren: () => import('./reset-clean/reset-clean.module').then( m => m.ResetCleanPageModule)
  },
  {
    path: 'reset-availability',
    loadChildren: () => import('./reset-availability/reset-availability.module').then( m => m.ResetAvailabilityPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinPageRoutingModule {}
