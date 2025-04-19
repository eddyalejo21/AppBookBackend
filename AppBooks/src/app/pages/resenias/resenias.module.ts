import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReseniasPageRoutingModule } from './resenias-routing.module';

import { ReseniasPage } from './resenias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReseniasPageRoutingModule
  ]
})
export class ReseniasPageModule {}
