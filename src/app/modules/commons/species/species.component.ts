import { Component, Input, OnInit } from '@angular/core';

import { ISpecies } from 'src/app/interfaces/species.interface';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.scss']
})
export class SpeciesComponent implements OnInit {

  @Input()
  pokemonId!: string;
  specie!: ISpecies;
  urlImage!: string;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.getListPokemons();
    this.urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
  }

  async getListPokemons() {
    this.specie = await this.pokedexService.getSpecies(this.pokemonId);
  }

}
