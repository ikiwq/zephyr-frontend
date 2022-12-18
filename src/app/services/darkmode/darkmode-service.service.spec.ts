import { TestBed } from '@angular/core/testing';

import { DarkmodeServiceService } from './darkmode-service.service';

describe('DarkmodeServiceService', () => {
  let service: DarkmodeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarkmodeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
