import { TestBed, inject } from '@angular/core/testing';

import { ComplementaryModuleDataService } from './complementary-module-data.service';

describe('ComplementaryModuleDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComplementaryModuleDataService]
    });
  });

  it('should be created', inject([ComplementaryModuleDataService], (service: ComplementaryModuleDataService) => {
    expect(service).toBeTruthy();
  }));
});
