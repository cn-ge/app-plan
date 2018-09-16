import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { CtrDisponibility } from '../models/ctrDisponibility';
import { API } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class ConstraintService {

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private http: HttpClient) {}

    getDisponibilityByPlanning(idPlanning: Number): Observable<CtrDisponibility> {
        return this.http.get<CtrDisponibility>(API.ctrDisponibility  + "/" + idPlanning);
    }

    createDisponibilityConstraint(constraint: CtrDisponibility): Observable<CtrDisponibility> {
        return this.http.post<CtrDisponibility>(API.ctrDisponibility, constraint);
    }

    updateDisponibilityConstraint(constraint: CtrDisponibility) {
        return this.http.put(API.ctrDisponibility  + "/" + constraint.id, constraint);
    }

    deleteDisponibilityConstraint(constraint: CtrDisponibility) {
        return this.http.delete(API.ctrDisponibility  + "/" + constraint.id);
    }
}
