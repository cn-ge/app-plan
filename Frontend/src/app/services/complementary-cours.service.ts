import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComplementaryCours } from '../models/complementary-cours';
import { API } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class ComplementaryCoursService {

  constructor(
      private httpClient:         HttpClient,
  ) { }
  
  public getComplementaryCourses() {
    return this.httpClient.get<ComplementaryCours[]>(API.complementary_course);
  }
  
  public enregistrerComplementaryCourses(complementaryCours: ComplementaryCours) {
    return this.httpClient.post(API.complementary_course, complementaryCours);
  }
  
}