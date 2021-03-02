import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputPhonenumberPage } from './input-phonenumber.page';

const routes: Routes = [
  {
    path: '',
    component: InputPhonenumberPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputPhonenumberPageRoutingModule {}
