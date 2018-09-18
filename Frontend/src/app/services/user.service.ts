import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models/user';
import { API } from '../utils/api';
import { HeaderLoginDataService } from './header-login.service';

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
    private dataService:  HeaderLoginDataService,
  ) { }

  // Envoi de l'information de connexion au header
  sendConnexionMessage(message: string) {
    this.dataService.changeMessage(message);
  }

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
    this.sendConnexionMessage("loggedIn");
  }

  public unsetUser() {
    sessionStorage.removeItem('user');
    this.sendConnexionMessage("logout");;
  }

  public isLogged():boolean {
    let loggedIn: boolean = JSON.parse(sessionStorage.getItem('loggedIn'));
    console.log('userservice loggedIn', JSON.parse(sessionStorage.getItem('loggedIn')));
    if (loggedIn) {
      return loggedIn ;
    } else { 
      return false;
    }
  }

  public getCurrentUser(): User {
    let user: User = JSON.parse(sessionStorage.getItem('user'));
    console.log('userservice user', JSON.parse(sessionStorage.getItem('user')));
    if (user) {
      return user;
    } else { 
      return null;
    }
  }
}
