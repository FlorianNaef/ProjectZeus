import { TestBed } from '@angular/core/testing';

import { RegulationService } from './c4.service';

describe('RecipesService', () => {
  let service: RegulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
