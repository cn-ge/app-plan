import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ComplementaryModule } from '../models/complementary-module';
import { API } from '../utils/api';

@Injectable({
  providedIn: 'root'
})
export class ComplementaryModuleService {

 constructor(
    private httpClient:         HttpClient,
  ) { }

  public getComplementaryModules() {
    return this.httpClient.get<ComplementaryModule[]>(API.complementary_module);
  }

  public saveModule(complementaryModule: ComplementaryModule) {
    return this.httpClient.post(API.complementary_module, complementaryModule);
  }
}
