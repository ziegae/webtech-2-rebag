import { TestBed } from '@angular/core/testing';
import { MarkersService } from './pins.service';

describe('SightsService', () => {
  let service: MarkersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarkersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
