import { TestBed } from '@angular/core/testing';

import { ConexionFirebaseDatabaseService } from './conexion-firebase-database.service';

describe('ConexionFirebaseDatabaseService', () => {
  let service: ConexionFirebaseDatabaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionFirebaseDatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
