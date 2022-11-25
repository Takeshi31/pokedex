import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  sub: any;
  pokemonId!: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route
      .params
      .subscribe(async params => {
        this.pokemonId = `${params['id']}`;
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
