import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegulationsPageRoutingModule } from './c5-routing.module';

import { RegulationPage } from './c5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegulationsPageRoutingModule
  ],
  declarations: [RegulationPage]
})
export class RegulationsPageModule {}
