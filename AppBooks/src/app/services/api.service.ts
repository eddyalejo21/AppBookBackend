import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ILibro } from '../interfaces/libros';
import { BehaviorSubject, Observable } from 'rxjs';
import { IResenia } from '../interfaces/resenias';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // private baseUrl = 'http://localhost/appbookbackend/controllers';
  apiLibros = 'http://localhost/appbookbackend/controllers/libros.controller.php?op=';
  apiResenias = 'http://localhost/appbookbackend/controllers/resenias.controller.php?op=';

  private http = inject(HttpClient)

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() { }

  getLibros() {
    return this.http.get(this.apiLibros + 'todos');
  }

  insertarLibro(libro: ILibro): Observable<string> {

    const formData = new FormData();
    formData.append('titulo', libro.titulo!);
    formData.append('autor', libro.autor!);
    formData.append('fecha_publicacion', libro.fecha_publicacion!);
    formData.append('descripcion', libro.descripcion!);
    formData.append('imagen', libro.imagen!);
    return this.http.post<string>(this.apiLibros + 'insertar', formData);
  }

  getReseniaPorLibro(id_libro: number) {
    const formData = new FormData();
    formData.append('id_libro', id_libro.toString());
    return this.http.post<IResenia[]>(this.apiResenias + 'libros', formData);
  }

  insertarResenia(resenia:IResenia): Observable<string> {

    const formData = new FormData();
    formData.append('id_libro', resenia.id_libro.toString());
    formData.append('usuario', resenia.usuario);
    formData.append('comentario', resenia.comentario);
    formData.append('valoracion', resenia.valoracion.toString());
    formData.append('fecha', resenia.fecha);
    return this.http.post<string>(this.apiResenias + 'insertar', formData);
  }

  eliminar(id_resenia: number): Observable<number> {
    const formData = new FormData();
    formData.append('id_resenia', id_resenia.toString());
    return this.http.post<number>(this.apiResenias + 'eliminar', formData);
  }

  actualizar(resenia:IResenia): Observable<string> {
    const formData = new FormData();
    formData.append('id_resenia', resenia.id_resenia.toString());
    formData.append('id_libro', resenia.id_libro.toString());
    formData.append('usuario', resenia.usuario);
    formData.append('comentario', resenia.comentario);
    formData.append('valoracion', resenia.valoracion.toString());
    formData.append('fecha', resenia.fecha);
    return this.http.post<string>(this.apiResenias + 'actualizar', formData);
  }

}
