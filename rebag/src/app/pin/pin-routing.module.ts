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
      },
      {
        path: 'reset-clean',
      loadChildren: () => import('./reset-clean/reset-clean.module').then( m => m.ResetCleanPageModule)
      }
    ]
  },
  {
    path: 'push-notification',
    loadChildren: () => import('./push-notification/push-notification.module').then( m => m.PushNotificationPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinPageRoutingModule {}
