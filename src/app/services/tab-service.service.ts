import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {

  public onTabSelected: EventEmitter<number> = new EventEmitter();

  constructor() { }

  setActiveTab(index: number) {
    this.onTabSelected.emit(index);
  }
}
