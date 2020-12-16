import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearUsuariosPageRoutingModule } from './crear-usuarios-routing.module';

import { CrearUsuariosPage } from './crear-usuarios.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearUsuariosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CrearUsuariosPage]
})
export class CrearUsuariosPageModule {}
