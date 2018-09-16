import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { Planning } from '../models/planning';
import { API } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  selectedPlanning = new BehaviorSubject<Planning>(null);
  newPlanning = new BehaviorSubject<Planning>(null);
  updatePlanningsList = new BehaviorSubject(null);
  openModalUpdatePlanning = new BehaviorSubject<Array<any>>(null);
  alertPlanningList = new BehaviorSubject<Array<any>>(null)

  httpOptions = {
      headers: new HttpHeaders({
          'Content-Type': 'application/json'
      })
  };

  constructor(private http: HttpClient) {
  }

  getPlanningsByStagiaire(codeStagiaire: Number): Observable<Planning[]> {
    return this.http.get<Planning[]>(API.planningByStagiaire  + "/" + codeStagiaire);
  }

  getPlanningById(idPlanning: Number): Observable<Planning> {
    return this.http.get<Planning>(API.planningById + "/" + idPlanning);
  }

  createPlanning(planning: Planning): Observable<Planning> {
    return this.http.post<Planning>(API.planning, planning);
  }

  updatePlanning(planning: Planning): Observable<Planning>  {
    return this.http.put<Planning>(API.planning  + "/" + planning.id, planning);
  }

  deletePlanning(planning: Planning) {
      return this.http.delete<Planning>(API.planning  + "/" + planning.id);
  }

  setSelectedPlanning(planning: Planning) {
    this.clearCoursOnPage();
    sessionStorage.setItem('selectedPlanning', JSON.stringify(planning));
    this.selectedPlanning.next(planning);
  }

  //Clear cours on web page from previous planning
  clearCoursOnPage() {
    let c = document.getElementsByClassName('green-bg');
    while (c[0]) {
        c[0].classList.remove('green-bg')
    }
  }
}
