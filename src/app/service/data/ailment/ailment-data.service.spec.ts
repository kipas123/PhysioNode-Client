import { TestBed } from '@angular/core/testing';

import { AilmentDataService } from './ailment-data.service';

describe('AilmentDataService', () => {
  let service: AilmentDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AilmentDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
