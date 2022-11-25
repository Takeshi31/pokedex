import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { PokedexComponent } from './pokedex/pokedex.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PokedexComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
