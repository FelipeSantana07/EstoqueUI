import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/model';

@Component({
  selector: 'app-listacategoria',
  templateUrl: './listacategoria.component.html',
  styleUrls: ['./listacategoria.component.scss']
})
export class ListacategoriaComponent implements OnInit {

  categorias: Categoria[] = [
    { id: 1, nomecategoria: 'Carnes' },
    { id: 2, nomecategoria: 'Verduras' },
    { id: 3, nomecategoria: 'Frutas' }
  ]

  displayedColumns = ['id', 'nomecategoria'];

  constructor() { }

  ngOnInit(): void {
  }

}
