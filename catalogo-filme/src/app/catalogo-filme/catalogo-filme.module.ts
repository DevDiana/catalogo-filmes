import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoFilmeComponent } from './catalogo-filme.component';



@NgModule({
  declarations: [CatalogoFilmeComponent],
  imports: [
    CommonModule
  ],
  exports: [CatalogoFilmeComponent]
})
export class CatalogoFilmeModule { }
