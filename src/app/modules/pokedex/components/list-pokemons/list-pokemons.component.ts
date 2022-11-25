import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';

import { IListResponse } from 'src/app/interfaces/listResponse.interface';
import { PokedexService } from 'src/app/services/pokedex.service';
import { ListPokemonsService } from './list-pokemons.service';

@Component({
  selector: 'app-list-pokemons',
  templateUrl: './list-pokemons.component.html',
  styleUrls: ['./list-pokemons.component.scss']
})
export class ListPokemonsComponent implements OnInit {
  listPokemonsInfo: any[] = [];
  pokemonsForCompare: string[] = [];
  nextPage: string = '';
  activeSearch: boolean = false;

  constructor(private pokedexService: PokedexService, private listPokemonsService: ListPokemonsService, private router: Router) { 
    $(window).scroll(() => {
      let heightDocument = $(document).height();
      let scrollTop = $(window).scrollTop();
      let heightViewPort = $(window).height();

      if (heightDocument === ((scrollTop || 0) + (heightViewPort || 0))) {
        this.getListPokemons();
      }
    });
  }

  ngOnInit(): void {
    this.getListPokemons();
    this.listPokemonsService.change.subscribe(listUpdated => {
      this.listPokemonsInfo = listUpdated;
      this.activeSearch = true;
    });
  }

  async getListPokemons() {
    if (this.activeSearch) {
      this.listPokemonsInfo = [];
      this.nextPage = ''
    }

    let listResponse: IListResponse = await this.pokedexService.listPokemons(this.nextPage);
    this.nextPage = listResponse.next;
    await this.getDataByPokemon(listResponse.results);
  }

  async getDataByPokemon(pokemons: any[]): Promise<any> {

    for await (let pokemon of pokemons) {
      let pokemonInfo = await this.pokedexService.getPokemon(pokemon.url);
      this.listPokemonsInfo.push({...pokemon, ...pokemonInfo});
    }

    this.activeSearch = false;
  }

  addOrRemovePokemonIds(id: string) {
    let exists: boolean = this.pokemonsForCompare.includes(id);

    if (exists) {
      let idIndex = this.pokemonsForCompare.indexOf(id);
      delete(this.pokemonsForCompare[idIndex]);
      this.pokemonsForCompare = this.pokemonsForCompare.filter(id => id);
    } else {
      this.pokemonsForCompare.push(id);
    }
  }

  comparePokemons() {
    this.router.navigate([`pokedex/compare/${this.pokemonsForCompare.join(',')}`]);  
  }

}
