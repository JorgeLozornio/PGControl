import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoventasPageRoutingModule } from './infoventas-routing.module';

import { InfoventasPage } from './infoventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoventasPageRoutingModule
  ],
  declarations: [InfoventasPage]
})
export class InfoventasPageModule {}
