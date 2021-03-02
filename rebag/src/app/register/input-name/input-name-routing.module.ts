import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputNamePage } from './input-name.page';

const routes: Routes = [
  {
    path: '',
    component: InputNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputNamePageRoutingModule {}
