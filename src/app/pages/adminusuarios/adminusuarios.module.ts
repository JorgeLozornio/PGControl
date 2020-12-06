import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminusuariosPageRoutingModule } from './adminusuarios-routing.module';

import { AdminusuariosPage } from './adminusuarios.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminusuariosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminusuariosPage]
})
export class AdminusuariosPageModule {}
