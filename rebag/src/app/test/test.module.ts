import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerifyPageRoutingModule } from './verify-routing.module';

import { VerifyPage } from './verify.page';

import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
<<<<<<< HEAD:rebag/src/app/register/verify/verify.module.ts
    VerifyPageRoutingModule
=======
    TestPageRoutingModule,
    GoogleMapsModule
>>>>>>> c410878ef175b764045b2a49452981815e34d729:rebag/src/app/test/test.module.ts
  ],
  declarations: [VerifyPage]
})
export class VerifyPageModule {}
