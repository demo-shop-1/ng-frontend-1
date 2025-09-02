import { TestBed } from '@angular/core/testing';

import { CategoryQueryRepository } from './category-query-api';

describe('CategoryQueryApi', () => {
  let service: CategoryQueryRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryQueryRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
