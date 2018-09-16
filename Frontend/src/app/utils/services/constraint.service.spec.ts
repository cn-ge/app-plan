import { TestBed, inject } from '@angular/core/testing';

import { ConstraintService } from './constraint.service';

describe('ConstraintService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConstraintService]
    });
  });

  it('should be created', inject([ConstraintService], (service: ConstraintService) => {
    expect(service).toBeTruthy();
  }));
});
