import { TestBed } from '@angular/core/testing';

import { ProductQueryRepository } from './product-query-repository';

describe('ProductQueryRepository', () => {
  let service: ProductQueryRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductQueryRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
