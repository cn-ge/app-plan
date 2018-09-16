import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';

import { API } from '../utils/api';
import { Lieu } from "../models/lieu";

@Injectable({
  providedIn: 'root'
})
export class LieuService {

    constructor(private http:HttpClient){
    }

    getLieux(): Observable<Lieu[]>
    {
        return this.http.get<Lieu[]>(API.lieu);
    }

    getLieu(code_lieu: number): Observable<Lieu>
    {
        return this.http.get<Lieu>(API.lieu + '/' + code_lieu);
    }

}
