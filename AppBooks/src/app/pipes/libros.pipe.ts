import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'libros',
  standalone: true,
  pure: false
})

export class LibrosPipe implements PipeTransform {

  transform(arreglo: any[], texto: string = ''): any[] {
    
    if (texto === '') {
      return arreglo;
    }

    if (!arreglo) {
      return arreglo;
    }

    texto = texto.toLowerCase();

    return arreglo.filter(
      item => item.titulo.toLowerCase().includes(texto)
    ); 
  }

}
