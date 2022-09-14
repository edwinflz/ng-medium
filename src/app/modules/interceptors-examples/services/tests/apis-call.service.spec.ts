import { TestBed } from '@angular/core/testing';

import { ApisCallService } from '../apis-call.service';

describe('ApisCallService', () => {
  let service: ApisCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
