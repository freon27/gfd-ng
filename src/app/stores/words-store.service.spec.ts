import { TestBed } from '@angular/core/testing';

import { WordsStoreService } from './words-store.service';

describe('WordsStoreService', () => {
  let service: WordsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
