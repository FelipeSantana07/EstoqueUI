import { Injectable } from '@angular/core';
import { Produto } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }

  listarProd(): Produto[] {
    return[
      {id:1, nomeprod:'Onix'},
      {id:2, nomeprod:'Hornet'},
      {id:3, nomeprod:'Caloi'},
      {id:4, nomeprod:'Titanic'},
      {id:5, nomeprod:'Boing'},
    ]
  }

}
