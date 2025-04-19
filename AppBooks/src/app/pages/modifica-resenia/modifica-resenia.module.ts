import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificaReseniaPageRoutingModule } from './modifica-resenia-routing.module';

import { ModificaReseniaPage } from './modifica-resenia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificaReseniaPageRoutingModule
  ]
})
export class ModificaReseniaPageModule {}
