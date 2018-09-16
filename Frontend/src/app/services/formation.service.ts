import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from 'rxjs';

import { API } from '../utils/api';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationService
{
    constructor(private http: HttpClient){
    }

    // Récupération de la liste des formation via le Backend
    getFormations(): Observable<Formation[]>
    {
        return this.http.get<Formation[]>(API.formation);
    }

    // Récupération d'une formation en fonction de son CodeFormation
    getFormation(codeFormation: string, codePlanning: number): Observable<Formation>
    {
        return this.http.get<Formation>(API.formationByPeriodLieu  + "/" + codeFormation + '/' + codePlanning);
    }
    

    // Récupération d'une formation en fonction de son CodeFormation
    getFormationById(codeFormation: string): Observable<Formation>
    {
        return this.http.get<Formation>(API.formation  + "/" + codeFormation);
    }
}
