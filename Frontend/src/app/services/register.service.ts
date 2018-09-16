import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private http: HttpClient,
  ) {  }
  
  store(data)
  {  
    return this.http.post(API.user, data);
  }
}
