import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaprodutoComponent } from './listaproduto/listaproduto.component';

const routes: Routes = [
  {
    path:'', component: ListaprodutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
