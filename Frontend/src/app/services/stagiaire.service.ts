import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Stagiaire } from '../models/stagiaire';
import { API } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  selectedStagiaire = new BehaviorSubject<Stagiaire>(null);

  constructor(private http: HttpClient) {
  }

  getStagiaires(): Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>(API.stagiaire);
  }

  getStagiaireById(stagiaireId: number): Observable<Stagiaire> {
    return this.http.get<Stagiaire>(API.stagiaire  + "/" + stagiaireId, {responseType: 'json'});
  }

  setSelectedStagiaire(stagiaire: Stagiaire) {
  	sessionStorage.setItem('selectedStagiaire', JSON.stringify(stagiaire));
    this.selectedStagiaire.next(stagiaire);
  }
}