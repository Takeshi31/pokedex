import { Component, HostListener, OnInit } from '@angular/core';

import { PokedexService } from 'src/app/services/pokedex.service';
import { ListPokemonsService } from '../pokedex/components/list-pokemons/list-pokemons.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  inputData: string = '';
  listPokemonsInfo: any[] = [];

  @HostListener('update')
  update(list: any) {
    this.listPokemonsService.updateList(list);
  }

  constructor(private pokedexService: PokedexService, private listPokemonsService: ListPokemonsService) {
  }

  ngOnInit(): void {
  }

  async searchPokemons() {
    let searchResponse = await this.pokedexService.searchPokemonsByName(this.inputData);
    await this.getDataByPokemon(searchResponse.results) 
  }

  async getDataByPokemon(pokemons: any[]) {
    this.listPokemonsInfo = [];
    for await (let pokemon of pokemons) {
      let pokemonInfo = await this.pokedexService.getPokemon(pokemon.url);
      this.listPokemonsInfo.push({...pokemon, ...pokemonInfo});
    }

    this.update(this.listPokemonsInfo);
  }

}
