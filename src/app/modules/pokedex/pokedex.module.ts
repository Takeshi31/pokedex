import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';  
import { ListPokemonsComponent } from './components/list-pokemons/list-pokemons.component';
import { PokemonCardComponent } from './components/list-pokemons/children/pokemon-card/pokemon-card.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { SpeciesComponent } from '../commons/species/species.component';
import { GeneralComponent } from '../commons/general/general.component';
import { ComparePokemonsComponent } from './components/compare-pokemons/compare-pokemons.component';

@NgModule({
  declarations: [
    ListPokemonsComponent,
    PokemonCardComponent,
    PokemonDetailsComponent,
    SpeciesComponent,
    GeneralComponent,
    ComparePokemonsComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
