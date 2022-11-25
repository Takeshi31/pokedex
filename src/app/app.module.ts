import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexService } from './services/pokedex.service';
import { HeaderComponent } from './modules/header/header.component';
import { PokedexComponent } from './modules/pokedex/pokedex.component';
import { PokedexModule } from './modules/pokedex/pokedex.module';
import { ListPokemonsService } from './modules/pokedex/components/list-pokemons/list-pokemons.service';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokedexComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PokedexModule,
    FormsModule
  ],
  providers: [PokedexService, ListPokemonsService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
