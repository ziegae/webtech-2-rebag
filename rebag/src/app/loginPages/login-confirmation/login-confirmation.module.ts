import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginConfirmationPageRoutingModule } from './login-confirmation-routing.module';

import { LoginConfirmationPage } from './login-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginConfirmationPageRoutingModule
  ],
  declarations: [LoginConfirmationPage]
})
export class LoginConfirmationPageModule {}
