import { TestBed, inject } from '@angular/core/testing';

import { ComplementaryCourseDataService } from './complementary-course-data.service';

describe('ComplementaryCourseDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComplementaryCourseDataService]
    });
  });

  it('should be created', inject([ComplementaryCourseDataService], (service: ComplementaryCourseDataService) => {
    expect(service).toBeTruthy();
  }));
});
