import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplementaryCourseDataService {

  private message = new BehaviorSubject('new course');
  currentMessage = this.message.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.message.next(message);
  }
}