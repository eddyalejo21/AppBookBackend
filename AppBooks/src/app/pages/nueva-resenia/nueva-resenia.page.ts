import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { ILibro } from 'src/app/interfaces/libros';
import { IResenia } from 'src/app/interfaces/resenias';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nueva-resenia',
  templateUrl: './nueva-resenia.page.html',
  styleUrls: ['./nueva-resenia.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, RouterModule],
})
export class NuevaReseniaPage implements OnInit {

  private api = inject(ApiService);
  private router = inject(Router);
  private toastController = inject(ToastController);

  formRegistro: FormGroup;
  libro: ILibro;

  constructor() {

    const navigation = window.history.state;
    if (navigation.objeto) {
      this.libro = navigation.objeto;
    }

    this.formRegistro = new FormGroup({
      usuario: new FormControl('', Validators.required),
      comentario: new FormControl('', Validators.required),
      valoracion: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
    console.log('La reseña es para el libro', this.libro);
  }

  registrarResenia() {
    const reseniaForm: IResenia = {
      id_libro: this.libro.id_libro,
      usuario: this.formRegistro.value['usuario'],
      comentario: this.formRegistro.value['comentario'],
      valoracion: this.formRegistro.value['valoracion'],
      fecha: new Date().toISOString().slice(0, 10)
    }

    this.api.insertarResenia(reseniaForm).subscribe(
      async data => {
        if (data != null) {
          await this.presentToast('Resenia registrada correctamente!', 'success');
          this.router.navigate(['/resenias']);
        } else {
          await this.presentToast('Error al registrar la reseña', 'danger');
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
