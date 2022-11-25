import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

import { ComparePokemonsComponent } from './modules/pokedex/components/compare-pokemons/compare-pokemons.component';
import { ListPokemonsComponent } from './modules/pokedex/components/list-pokemons/list-pokemons.component';
import { PokemonDetailsComponent } from './modules/pokedex/components/pokemon-details/pokemon-details.component';
import { PokedexComponent } from './modules/pokedex/pokedex.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pokedex/list',
    pathMatch: 'full'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
  path: 'pokedex',
  component: PokedexComponent,
  children: [
    {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
    },
    {
      path: 'list',
      component: ListPokemonsComponent
    },
    {
      path: 'details/:id',
      component: PokemonDetailsComponent
    },
    {
      path: 'compare/:ids',
      component: ComparePokemonsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private router: Router) {
    this.router.errorHandler = (error: any) => {
      this.router.navigate(['not-found']);
    }
  }
}
