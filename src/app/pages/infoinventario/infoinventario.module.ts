import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoinventarioPageRoutingModule } from './infoinventario-routing.module';

import { InfoinventarioPage } from './infoinventario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoinventarioPageRoutingModule
  ],
  declarations: [InfoinventarioPage]
})
export class InfoinventarioPageModule {}
