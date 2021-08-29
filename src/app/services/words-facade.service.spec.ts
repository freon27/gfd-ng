import { TestBed } from '@angular/core/testing';

import { WordsFacadeService } from './words-facade.service';

describe('WordsFacadeService', () => {
  let service: WordsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
