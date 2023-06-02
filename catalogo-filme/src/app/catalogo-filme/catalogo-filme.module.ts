import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoFilmeComponent } from './catalogo-filme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { MatLabel } from '@angular/material/form-field';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [CatalogoFilmeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  exports: [CatalogoFilmeComponent]
})
export class CatalogoFilmeModule { }
