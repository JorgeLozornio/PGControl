import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoinventarioPage } from './infoinventario.page';

const routes: Routes = [
  {
    path: '',
    component: InfoinventarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoinventarioPageRoutingModule {}
