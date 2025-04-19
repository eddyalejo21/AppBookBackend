import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { IResenia } from 'src/app/interfaces/resenias';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-modifica-resenia',
  templateUrl: './modifica-resenia.page.html',
  styleUrls: ['./modifica-resenia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, RouterModule],
})
export class ModificaReseniaPage implements OnInit {

  private api = inject(ApiService);
  private router = inject(Router);
  private toastController = inject(ToastController);

  formRegistro: FormGroup;
  resenia: IResenia;

  constructor() {
    const navigation = window.history.state;
    if (navigation.objeto) {
      this.resenia = navigation.objeto;
    }

    this.formRegistro = new FormGroup({
      comentario: new FormControl(this.resenia.comentario, Validators.required),
      valoracion: new FormControl(this.resenia.valoracion, Validators.required)
    })
  }

  ngOnInit() {
    console.log(this.resenia.usuario);
  }

  modificarResenia() {

    const hoy = new Date();
    const fechaPublicacion = hoy.getFullYear() + '-' +
      String(hoy.getMonth() + 1).padStart(2, '0') + '-' +
      String(hoy.getDate()).padStart(2, '0');

      console.log('fecha',fechaPublicacion);

    const reseniaForm: IResenia = {
      id_resenia: this.resenia.id_resenia,
      id_libro: this.resenia.id_libro,
      usuario: this.resenia.usuario,
      comentario: this.formRegistro.value['comentario'],
      valoracion: this.formRegistro.value['valoracion'],
      fecha: fechaPublicacion
    }

    this.api.actualizar(reseniaForm).subscribe(
      async data => {
        if (data != null) {
          await this.presentToast('Reseñaa modificada correctamente!', 'success');
          this.router.navigate(['/resenias']);
        } else {
          await this.presentToast('Error al modificar la reseña', 'danger');
        }
      },
      async error => {
        console.error('Error:', error);
        await this.presentToast('Ocurrió un error al registrar', 'danger');
      }
    );

  }

  async presentToast(mensaje: string, color: 'success' | 'danger') {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2500,
      color: color,
      position: 'top'
    });
    await toast.present();
  }

}
