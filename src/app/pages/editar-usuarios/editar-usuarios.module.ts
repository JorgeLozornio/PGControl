import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarUsuariosPageRoutingModule } from './editar-usuarios-routing.module';

import { EditarUsuariosPage } from './editar-usuarios.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarUsuariosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditarUsuariosPage]
})
export class EditarUsuariosPageModule {}
