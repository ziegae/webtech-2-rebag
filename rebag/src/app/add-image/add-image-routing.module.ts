import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddImagePage } from './add-image.page';

const routes: Routes = [
  {
    path: '',
    component: AddImagePage
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./camera/camera.module').then( m => m.CameraPageModule)
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
export class AddImagePageRoutingModule {}
