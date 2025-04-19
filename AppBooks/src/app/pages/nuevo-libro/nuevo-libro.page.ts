import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonicModule, ToastController } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ILibro } from 'src/app/interfaces/libros';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.page.html',
  styleUrls: ['./nuevo-libro.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, HttpClientModule, ReactiveFormsModule],
})
export class NuevoLibroPage implements OnInit {

  private api = inject(ApiService);
  private router = inject(Router);
  private toastController = inject(ToastController);

  formRegistro: FormGroup;

  constructor() {
    this.formRegistro = new FormGroup({
      titulo: new FormControl('', Validators.required),
      autor: new FormControl('', Validators.required),
      fecha_publicacion: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required)
    })
  }

  ngOnInit() {
  }

  registrarLibro() {
    const libroForm: ILibro = {
      titulo: this.formRegistro.value['titulo'],
      autor: this.formRegistro.value['autor'],
      fecha_publicacion: this.formRegistro.value['fecha_publicacion'],
      descripcion: this.formRegistro.value['descripcion'],
      imagen: this.formRegistro.value['imagen']
    }

    this.api.insertarLibro(libroForm).subscribe(
      async data => {
        if (data != null) {
          await this.presentToast('¡Libro registrado correctamente!', 'success');
          this.router.navigate(['/home']);
        } else {
          await this.presentToast('Error al registrar el libro', 'danger');
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
