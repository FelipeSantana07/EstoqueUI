import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListacategoriaComponent } from './listacategoria/listacategoria.component';

const routes: Routes = [
  {
    path:'', component: ListacategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
