import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CatalogoFilme } from 'src/assets/model/catalogo-filme.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo-filme',
  templateUrl: './catalogo-filme.component.html',
  styleUrls: ['./catalogo-filme.component.scss'],
})
export class CatalogoFilmeComponent {
  favoriteMovies: CatalogoFilme[] = [];
  @Input() isOpen = false;
  listaFilme: CatalogoFilme[] = [];
  favoriteItems: string[] = [];
  favoritos: string[] = [];
  public termoPesquisa: string = '';
  private apiKey = '67a0af0';


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {}

  pesquisarFilme() {
    if (!this.termoPesquisa) { // aqui caso o usuário não digite o nome do filme mostra um alerta para ele preencher o campo
      alert('Preencha o campo!');
      return;
    }

    const apiUrl = `https://omdbapi.com/?s=${this.termoPesquisa}&apikey=${this.apiKey}`; //quando o usuário digita o nome do filme é  enviado uma solicitação HTTP GET para a URL da API usando o Angular's HttpClient. A resposta da API é capturada por meio da função de callback fornecida para o método
    this.http.get<any>(apiUrl).subscribe((response) => {
      this.carregaLista(response); // chama o método  e devolve pra ele a lista que foi passada pelo usuário
      console.log(response);
    });
  }

  carregaLista(json: any) { //esse método atualiza a lista de filmes com base na API
    if (json && json.Search) { // verifica se o objeto existe(json)
      this.listaFilme = json.Search; // faz a atribuição da resposta encontrada a listaFilme
    } else {
      this.listaFilme = [];
    }
    if (json.Response == 'False') { // quando não acha o filme esperado ele mostra false e mostra um alerta ao usuário
      alert('Filme não encontrado');
    }
  }

  addFavorito(imdbID: string) {
    const index = this.favoriteItems.indexOf(imdbID);
    if (index > -1) {
      this.favoriteItems.splice(index, 1); // Remove o imdbID do item dos favoritos
      alert('Removido dos  favoritos');
    } else {
      this.favoriteItems.push(imdbID); // Adiciona o imdbID do item aos favoritos
      alert('Adicionado dos favoritos');
    }
  }

  isFavorite(imdbID: string) { // verifica se um filme com o ID IMDb fornecido já está presente na lista de favoritos. Ele retorna true se o filme estiver na lista e false caso contrário.
    return this.favoriteItems.includes(imdbID);
  }
  favoritarFilme(imdbID: string) {
    if (this.isFavorito(imdbID)) { // verifica se o id já esta presente na lista da função isFavorite se tiver assim que clicado executará a função e remove o id dos favoritos
      this.favoritos = this.favoritos.filter((id) => id !== imdbID);
      alert('Removido dos  favoritos');
    } else {
      this.favoritos.push(imdbID); // caso o filme já não esteja favoritado ele deixa o id do filme como favorito
      alert('Adicionado dos favoritos');
    }
  }

  isFavorito(imdbID: string): boolean { // verifica se o filme ja  esta na lista de favoritos aí ele adicona ou remove da lista se ele já esta presente ou não
    return this.favoritos.includes(imdbID);
  }
}
