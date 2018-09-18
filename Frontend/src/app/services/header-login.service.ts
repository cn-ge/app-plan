import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class HeaderLoginDataService {

  private message = new BehaviorSubject('message');
  currentMessage = this.message.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.message.next(message);
  }
}