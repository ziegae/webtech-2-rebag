import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResetCleanPage } from './reset-clean.page';

const routes: Routes = [
  {
    path: '',
    component: ResetCleanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetCleanPageRoutingModule {}
