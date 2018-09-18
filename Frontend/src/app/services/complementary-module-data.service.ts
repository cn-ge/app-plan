import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ComplementaryModuleDataService {

  private message = new BehaviorSubject('new module');
  currentMessage = this.message.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.message.next(message);
  }
}