import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private optionSource = new BehaviorSubject<number>(0);
  currentOption = this.optionSource.asObservable();

  constructor() { }

  changeOption(option: number) {
    this.optionSource.next(option);
  }

}
