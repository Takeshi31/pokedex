import { TestBed } from '@angular/core/testing';

import { ListPokemonsService } from './list-pokemons.service';

describe('ListPokemonsService', () => {
  let service: ListPokemonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListPokemonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
