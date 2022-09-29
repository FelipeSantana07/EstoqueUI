import { ProdutoService } from './../produto.service';
import { Produto } from './../../core/model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listaproduto',
  templateUrl: './listaproduto.component.html',
  styleUrls: ['./listaproduto.component.scss']
})
export class ListaprodutoComponent implements OnInit {

  produto: Produto[] = []

  displayedColumns = ['id', 'nomeprod'];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produto = this.produtoService.listarProd()
  }

}
