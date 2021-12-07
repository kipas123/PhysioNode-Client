import { TestBed } from '@angular/core/testing';

import { UserServiceTypeDataService } from './user-service-type-data.service';

describe('UserServiceTypeDataService', () => {
  let service: UserServiceTypeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceTypeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
