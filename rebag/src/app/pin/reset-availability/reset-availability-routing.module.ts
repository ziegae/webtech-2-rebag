import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetAvailabilityPage } from './reset-availability.page';

const routes: Routes = [
  {
    path: '',
    component: ResetAvailabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetAvailabilityPageRoutingModule {}
