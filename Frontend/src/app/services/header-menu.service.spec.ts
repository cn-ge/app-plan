import { TestBed, inject } from '@angular/core/testing';

import { HeaderMenuDataService } from './headerMenuData.service';

describe('HeaderMenuDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeaderMenuDataService]
    });
  });

  it('should be created', inject([HeaderMenuDataService], (service: HeaderMenuDataService) => {
    expect(service).toBeTruthy();
  }));
});
