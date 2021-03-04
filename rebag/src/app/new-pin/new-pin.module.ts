import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPinPageRoutingModule } from './new-pin-routing.module';

import { NewPinPage } from './new-pin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPinPageRoutingModule
  ],
  declarations: [NewPinPage]
})
export class NewPinPageModule {}
