import { TestBed, inject } from '@angular/core/testing';

import { HeaderLoginDataService } from './headerLoginData.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderLoginDataService]
    });
  });

  it('should be created', inject([HeaderLoginDataService], (service: HeaderLoginDataService) => {
    expect(service).toBeTruthy();
  }));
});
