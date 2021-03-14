import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResetCleanPageRoutingModule } from './reset-clean-routing.module';
import { ResetCleanPage } from './reset-clean.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetCleanPageRoutingModule
  ],
  declarations: [ResetCleanPage]
})

export class ResetCleanPageModule { }
