import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compare-pokemons',
  templateUrl: './compare-pokemons.component.html',
  styleUrls: ['./compare-pokemons.component.scss']
})
export class ComparePokemonsComponent implements OnInit {

  sub: any;
  pokemonIds!: [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route
      .params
      .subscribe(async params => {
        this.pokemonIds = params['ids'].split(',');
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
