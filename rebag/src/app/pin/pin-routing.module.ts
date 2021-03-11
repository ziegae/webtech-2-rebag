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
        children: [
      {
        path:"",
        loadChildren: () => import('./overview/overview.module').then( m => m.OverviewPageModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinPageRoutingModule {}
