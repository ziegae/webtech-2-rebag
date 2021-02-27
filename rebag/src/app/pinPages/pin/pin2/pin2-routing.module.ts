import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pin2Page } from './pin2.page';

const routes: Routes = [
  {
    path: '',
    component: Pin2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pin2PageRoutingModule {}
