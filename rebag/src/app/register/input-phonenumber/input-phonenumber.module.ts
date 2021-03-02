import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputPhonenumberPageRoutingModule } from './input-phonenumber-routing.module';

import { InputPhonenumberPage } from './input-phonenumber.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputPhonenumberPageRoutingModule
  ],
  declarations: [InputPhonenumberPage]
})
export class InputPhonenumberPageModule {}
