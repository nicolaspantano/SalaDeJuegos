import { TestBed } from '@angular/core/testing';

import { PptchatService } from './pptchat.service';

describe('PptchatService', () => {
  let service: PptchatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PptchatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
