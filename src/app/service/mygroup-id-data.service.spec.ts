import { TestBed } from '@angular/core/testing';

import { MygroupIdDataService } from './mygroup-id-data.service';

describe('MygroupIdDataService', () => {
  let service: MygroupIdDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MygroupIdDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
