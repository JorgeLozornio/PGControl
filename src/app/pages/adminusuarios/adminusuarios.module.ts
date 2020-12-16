import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdminusuariosPageRoutingModule } from './adminusuarios-routing.module';
import { AdminusuariosPage } from './adminusuarios.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { CrearUsuariosPage } from '../crear-usuarios/crear-usuarios.page';
import { CrearUsuariosPageModule } from '../crear-usuarios/crear-usuarios.module';
import { EditarUsuariosPage } from '../editar-usuarios/editar-usuarios.page';
import { EditarUsuariosPageModule } from '../editar-usuarios/editar-usuarios.module';

@NgModule({
  entryComponents: [ CrearUsuariosPage, EditarUsuariosPage ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminusuariosPageRoutingModule,
    ComponentsModule,
    PipesModule,
    CrearUsuariosPageModule,
    EditarUsuariosPageModule
  ],
  declarations: [AdminusuariosPage]
})
export class AdminusuariosPageModule {}
