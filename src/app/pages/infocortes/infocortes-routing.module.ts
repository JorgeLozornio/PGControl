import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfocortesPage } from './infocortes.page';

const routes: Routes = [
  {
    path: '',
    component: InfocortesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfocortesPageRoutingModule {}
