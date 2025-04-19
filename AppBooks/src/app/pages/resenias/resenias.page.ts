import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonicModule, NavController, ViewDidEnter } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { ILibro } from 'src/app/interfaces/libros';
import { ApiService } from 'src/app/services/api.service';
import { RouterModule } from '@angular/router';
import { IResenia } from 'src/app/interfaces/resenias';

@Component({
  selector: 'app-resenias',
  templateUrl: './resenias.page.html',
  styleUrls: ['./resenias.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule, RouterModule],
})
export class ReseniasPage implements OnInit, ViewDidEnter {

  private api = inject(ApiService);
  private navCtrl = inject(NavController);

  libro: ILibro;
  resenias: IResenia[] = [];
  promedioValoracion: number;

  constructor() {
    const navigation = window.history.state;
    if (navigation.objeto) {
      this.libro = navigation.objeto;
    }
  }

  ngOnInit() {
    this.cargarResenias();
  }

  ionViewDidEnter() {
    this.cargarResenias();
  }

  cargarResenias() {
    this.api.getReseniaPorLibro(this.libro.id_libro).subscribe(data => {
      this.resenias = data;
    });
  }

  getColor(valoracion: number): string {
    if (valoracion >= 8) {
      return 'primary'; // verde
    } else if (valoracion >= 5) {
      return 'warning'; // amarillo
    } else {
      return 'danger'; // rojo
    }
  }

  irADetalle(libro: ILibro){
    this.navCtrl.navigateForward('/nueva-resenia', {
      state: { objeto: libro }
    });
  }

  eliminar(id_resenia:number){
    console.log('Id ==>', id_resenia);
    this.api.eliminar(id_resenia).subscribe((data) => {
      this.cargarResenias();
    });
  }

  irModificar(resenia:IResenia){
    this.navCtrl.navigateForward('/modifica-resenia', {
      state: { objeto: resenia }
    });
  }

}
