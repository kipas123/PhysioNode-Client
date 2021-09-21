import { TestBed } from '@angular/core/testing';

import { AilmentIDDataService } from './ailment-id-data.service';

describe('AilmentIDDataService', () => {
  let service: AilmentIDDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AilmentIDDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
