import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputNamePageRoutingModule } from './input-name-routing.module';

import { InputNamePage } from './input-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputNamePageRoutingModule
  ],
  declarations: [InputNamePage]
})
export class InputNamePageModule {}
