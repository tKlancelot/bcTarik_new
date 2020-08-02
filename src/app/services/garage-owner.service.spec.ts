import { TestBed } from '@angular/core/testing';

import { GarageOwnerService } from './garage-owner.service';

describe('GarageOwnerService', () => {
  let service: GarageOwnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarageOwnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
