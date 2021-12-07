import { TestBed } from '@angular/core/testing';

import { UserWorkDataService } from './user-work-data.service';

describe('UserWorkDataService', () => {
  let service: UserWorkDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserWorkDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
