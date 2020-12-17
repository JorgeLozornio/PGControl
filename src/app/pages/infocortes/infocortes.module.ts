import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfocortesPageRoutingModule } from './infocortes-routing.module';

import { InfocortesPage } from './infocortes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfocortesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfocortesPage]
})
export class InfocortesPageModule {}
