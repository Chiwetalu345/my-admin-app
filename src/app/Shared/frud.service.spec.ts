import { TestBed } from '@angular/core/testing';

import { FrudService } from './frud.service';

describe('FrudService', () => {
  let service: FrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
