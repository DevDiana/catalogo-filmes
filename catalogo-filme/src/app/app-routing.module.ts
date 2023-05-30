import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoFilmeComponent } from './catalogo-filme/catalogo-filme.component';

const routes: Routes = [
  {
    path: '',
    component: CatalogoFilmeComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
