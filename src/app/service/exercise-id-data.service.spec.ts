import { TestBed } from '@angular/core/testing';

import { ExerciseIdDataService } from './exercise-id-data.service';

describe('ExerciseIdDataService', () => {
  let service: ExerciseIdDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExerciseIdDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
