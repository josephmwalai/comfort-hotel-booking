import { TestBed } from '@angular/core/testing';

import { RoomieService } from './roomie.service';

describe('RoomieService', () => {
  let service: RoomieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoomieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
