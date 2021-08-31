import { TestBed } from '@angular/core/testing';

import { MygroupDataService } from './mygroup-data.service';

describe('MygroupDataService', () => {
  let service: MygroupDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MygroupDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
