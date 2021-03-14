import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ResetAvailabilityPageRoutingModule } from './reset-availability-routing.module';
import { ResetAvailabilityPage } from './reset-availability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetAvailabilityPageRoutingModule
  ],
  declarations: [ResetAvailabilityPage]
})

export class ResetAvailabilityPageModule { }
