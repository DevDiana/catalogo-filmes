import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogoFilmeComponent } from './catalogo-filme/catalogo-filme.component';
import { CatalogoFilmeModule } from './catalogo-filme/catalogo-filme.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CatalogoFilmeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
