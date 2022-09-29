import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { ListacategoriaComponent } from './listacategoria/listacategoria.component';

import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    ListacategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    MatTableModule
  ]
})
export class CategoriaModule { }
