import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'venta',
    loadChildren: () => import('./pages/venta/venta.module').then( m => m.VentaPageModule)
  },
  {
    path: 'corte',
    loadChildren: () => import('./pages/corte/corte.module').then( m => m.CortePageModule)
  },
  {
    path: 'infoventas',
    loadChildren: () => import('./pages/infoventas/infoventas.module').then( m => m.InfoventasPageModule)
  },
  {
    path: 'infocortes',
    loadChildren: () => import('./pages/infocortes/infocortes.module').then( m => m.InfocortesPageModule)
  },
  {
    path: 'infoinventario',
    loadChildren: () => import('./pages/infoinventario/infoinventario.module').then( m => m.InfoinventarioPageModule)
  },
  {
    path: 'adminusuarios',
    loadChildren: () => import('./pages/adminusuarios/adminusuarios.module').then( m => m.AdminusuariosPageModule)
  },
  {
    path: 'adminproductos',
    loadChildren: () => import('./pages/adminproductos/adminproductos.module').then( m => m.AdminproductosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
