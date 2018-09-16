import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

import { User } from '../models/user';
import { API } from '../utils/api';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json;charset=UTF-8'
    })
  };

  constructor(
    private http:         HttpClient,
    private loginService: LoginService,
    private router:       Router,
  ) { }


  getUser(userId: number) {
    return this.http.get(API.user + "/" + userId, {responseType: 'json'});
  }

  public getUsers() {
    return this.http.get<User[]>(API.user);
  }

  public updateUser(data) {
    return this.http.put(API.user + "/" + data.id, data, this.httpOptions);
  }

  public updateUserPassword(data) {
    return this.http.put(API.password + "/" + data.id, data, this.httpOptions);
  }
  
  public setUser(user: User) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  public unsetUser() {
    sessionStorage.removeItem('user');
  }
}
