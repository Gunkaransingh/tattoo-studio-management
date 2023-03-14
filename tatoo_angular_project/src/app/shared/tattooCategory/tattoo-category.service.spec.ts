import { TestBed } from '@angular/core/testing';

import { TattooCategoryService } from './tattoo-category.service';

describe('TattooCategoryService', () => {
  let service: TattooCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TattooCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
