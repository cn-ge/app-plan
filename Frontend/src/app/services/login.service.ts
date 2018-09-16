import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { API } from '../utils/api';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor(
    private httpClient: HttpClient
  ) {  }

  changeAuthStatus(value: boolean){
    this.loggedIn.next(value);
    sessionStorage.setItem('loggedIn', (value ? 'true' : 'false'));
  }

  getStatus() {
    return this.loggedIn.asObservable();
  }
  
  login(data) {
    return this.httpClient.post(API.login, data);
  }
}

