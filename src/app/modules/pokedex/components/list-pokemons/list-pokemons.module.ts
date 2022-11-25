import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPokemonsRoutingModule } from './list-pokemons-routing.module';
import { PokemonCardComponent } from './children/pokemon-card/pokemon-card.component';


@NgModule({
  declarations: [
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    ListPokemonsRoutingModule
  ]
})
export class ListPokemonsModule { }
