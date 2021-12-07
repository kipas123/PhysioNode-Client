import { TestBed } from '@angular/core/testing';

import { UserVisitDataService } from './user-visit-data.service';

describe('UserVisitDataService', () => {
  let service: UserVisitDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserVisitDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
