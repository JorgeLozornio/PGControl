import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfocortesPageRoutingModule } from './infocortes-routing.module';

import { InfocortesPage } from './infocortes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfocortesPageRoutingModule
  ],
  declarations: [InfocortesPage]
})
export class InfocortesPageModule {}
