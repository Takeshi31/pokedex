import { Injectable } from '@angular/core';

import { WrapperService } from './wrapper.service';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  constructor(private http: WrapperService) {

  }

  async listPokemons(next: string) {
    return await this.http.get(next);
  }

  async getPokemon(url: string) {
    return await this.http.getByUrl(url);
  }

  async getSpecies(url: string) {
    return await this.http.getSpecies(url);
  }

  async getGeneralInfo(url: string) {
    return await this.http.getGeneralInfo(url);
  }

  async searchPokemonsByName(name: string) {
    return await this.http.getPokemonsByName(name);
  }

}
