import { Injectable } from '@angular/core';
import { Categoria } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor() { }

  listarCategorias(): Categoria[] {
    return[
      {id:1, nomecategoria: 'Carros'},
      {id:2, nomecategoria: 'Motos'},
      {id:3, nomecategoria: 'Bicicletas'},
      {id:4, nomecategoria: 'Barcos'},
      {id:5, nomecategoria: 'Aviões'},
    ]
  }
}
