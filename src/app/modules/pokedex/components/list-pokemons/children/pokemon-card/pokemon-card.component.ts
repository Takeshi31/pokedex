import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemonData: any;

  @Output() comparePokemonId: EventEmitter<string> = new EventEmitter;

  compareIcon: string = '../../../../../../../assets/icons/compare.png';
  removeIcon: string = '../../../../../../../assets/icons/remove.ico';
  buttonIcon!: string;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.buttonIcon = this.compareIcon;
  }

  goToDetails() {
    this.router.navigate([`pokedex/details/${this.pokemonData.id}`]);
  }

  compare() {
    this.buttonIcon = this.buttonIcon === this.compareIcon ? this.removeIcon : this.compareIcon;
    this.comparePokemonId.emit(this.pokemonData.id);
  }

}
