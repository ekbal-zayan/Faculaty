import { TestBed } from '@angular/core/testing';

import { DataGetService } from './data-get.service';

describe('DataGetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataGetService = TestBed.get(DataGetService);
    expect(service).toBeTruthy();
  });
});
