import { TestBed } from '@angular/core/testing';

import { TatetichatService } from './tatetichat.service';

describe('TatetichatService', () => {
  let service: TatetichatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TatetichatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
