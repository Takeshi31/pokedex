import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable()
export class ListPokemonsService {

  listUpdated: any[] = [];

  constructor() { }

  @Output() change: EventEmitter<any> = new EventEmitter();
  updateList(list: any) {
    this.listUpdated = list;
    this.change.emit(this.listUpdated);
  }
}
