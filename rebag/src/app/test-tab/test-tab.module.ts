import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestTabPageRoutingModule } from './test-tab-routing.module';

import { TestTabPage } from './test-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestTabPageRoutingModule
  ],
  declarations: [TestTabPage]
})
export class TestTabPageModule {}
