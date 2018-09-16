import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { ActivityLog } from '../models/activitylog';
import { API } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class ActivityLogService {

  constructor(
    private http: HttpClient,
  ) { }

  storeActivityLog(activityLog: ActivityLog) {
    return this.http.post(API.logs, activityLog);
  }

  getActivityLogs():Observable<ActivityLog[]> {
    return this.http.get<ActivityLog[]>(API.logs);
  }

  deleteLogs() {
    return this.http.post(API.purge_logs, new ActivityLog());
  }
}
