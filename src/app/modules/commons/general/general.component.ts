import { Component, Input, OnInit } from '@angular/core';

import { IGeneralInfo } from 'src/app/interfaces/general.interface';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

  @Input()
  pokemonId!: string;
  generalInfo!: IGeneralInfo;

  constructor(private pokedexService: PokedexService) { }

  ngOnInit(): void {
    this.getGeneralInfo();
  }

  async getGeneralInfo() {
    this.generalInfo = await this.pokedexService.getGeneralInfo(this.pokemonId);
  }

}
