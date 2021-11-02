import { TestBed } from '@angular/core/testing';

import { FileStorageDataService } from './file-storage-data.service';

describe('FileStorageDataService', () => {
  let service: FileStorageDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileStorageDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
