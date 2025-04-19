import { Component, inject } from '@angular/core';
import { ApiService } from '../services/api.service';
import { IonicModule, NavController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ILibro } from '../interfaces/libros';
import { LibrosPipe } from '../pipes/libros.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule, LibrosPipe, RouterModule],
})
export class HomePage {

  private api = inject(ApiService);
  private navCtrl = inject(NavController)

  libros: any[] = [];
  libroBuscar: string = '';

  constructor() {}

  ionViewWillEnter() {
    this.api.getLibros().subscribe((data: any) => this.libros = data);
  }

  onSearchChange(event) {
    this.libroBuscar = event.detail.value;
  }

  verResenias(libro : ILibro) {
    this.navCtrl.navigateForward('/resenias', {
      state: { objeto: libro }
    });
  }

 
}
