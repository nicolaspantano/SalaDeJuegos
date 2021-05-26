import { TestBed } from '@angular/core/testing';

import { MayormenorchatService } from './mayormenorchat.service';

describe('MayormenorchatService', () => {
  let service: MayormenorchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MayormenorchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
