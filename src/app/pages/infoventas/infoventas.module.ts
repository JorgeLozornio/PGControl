import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoventasPageRoutingModule } from './infoventas-routing.module';

import { InfoventasPage } from './infoventas.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoventasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfoventasPage]
})
export class InfoventasPageModule {}
