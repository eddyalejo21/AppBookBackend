import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'resenias',
    loadChildren: () => import('./pages/resenias/resenias.module').then( m => m.ReseniasPageModule)
  },
  {
    path: 'nuevo-libro',
    loadChildren: () => import('./pages/nuevo-libro/nuevo-libro.module').then( m => m.NuevoLibroPageModule)
  },
  {
    path: 'nueva-resenia',
    loadChildren: () => import('./pages/nueva-resenia/nueva-resenia.module').then( m => m.NuevaReseniaPageModule)
  },
  {
    path: 'modifica-resenia',
    loadChildren: () => import('./pages/modifica-resenia/modifica-resenia.module').then( m => m.ModificaReseniaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
