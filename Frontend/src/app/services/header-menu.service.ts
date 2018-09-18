import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderMenuDataService {

  private message = new BehaviorSubject('message');
  currentMessage = this.message.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.message.next(message);
  }
}