import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginConfirmationPage } from './login-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: LoginConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginConfirmationPageRoutingModule {}
