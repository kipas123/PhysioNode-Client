import { TestBed } from '@angular/core/testing';

import { UserIdDataService } from './user-id-data.service';

describe('UserIdDataService', () => {
  let service: UserIdDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserIdDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
