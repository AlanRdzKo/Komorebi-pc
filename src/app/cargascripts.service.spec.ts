import { TestBed } from '@angular/core/testing';

import { CargascriptsService } from './cargascripts.service';

describe('CargascriptsService', () => {
  let service: CargascriptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargascriptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
