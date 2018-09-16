import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { API } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(
    private http: HttpClient,
  ) { }

  getBackendENIStatus() {
    return this.http.get(API.backend_status_eniplanning);
  }

  getBackendERPStatus() {
    return this.http.get(API.backend_status_erp);
  }

  getEniDBStatus() {
    return this.http.get(API.db_status_eniplanning);
  }

  getErpDBStatus() {
    return this.http.get(API.db_status_erp);
  }
}
