import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pin2PageRoutingModule } from './pin2-routing.module';

import { Pin2Page } from './pin2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pin2PageRoutingModule
  ],
  declarations: [Pin2Page]
})
export class Pin2PageModule {}
