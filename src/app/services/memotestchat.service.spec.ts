import { TestBed } from '@angular/core/testing';

import { MemotestchatService } from './memotestchat.service';

describe('MemotestchatService', () => {
  let service: MemotestchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemotestchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
