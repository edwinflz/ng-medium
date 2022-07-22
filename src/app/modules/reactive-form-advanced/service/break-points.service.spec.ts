import { TestBed } from '@angular/core/testing';

import { BreakPointsService } from './break-points.service';

describe('BreakPointsService', () => {
  let service: BreakPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BreakPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
