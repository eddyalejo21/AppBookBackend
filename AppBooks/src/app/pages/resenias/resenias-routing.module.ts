import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReseniasPage } from './resenias.page';

const routes: Routes = [
  {
    path: '',
    component: ReseniasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReseniasPageRoutingModule {}
