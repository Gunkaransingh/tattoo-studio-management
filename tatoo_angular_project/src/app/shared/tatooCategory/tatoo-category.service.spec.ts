import { TestBed } from '@angular/core/testing';

import { TatooCategoryService } from './tatoo-category.service';

describe('TatooCategoryService', () => {
  let service: TatooCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TatooCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
