import { CategoriaService } from './../categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/core/model';

@Component({
  selector: 'app-listacategoria',
  templateUrl: './listacategoria.component.html',
  styleUrls: ['./listacategoria.component.scss']
})
export class ListacategoriaComponent implements OnInit {

  categoria: Categoria[] = []

  displayedColumns = ['id', 'nomecategoria'];

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
  this.categoria = this.categoriaService.listarCategorias()
  }

}
