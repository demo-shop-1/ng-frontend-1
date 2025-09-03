import { inject, Injectable } from '@angular/core';
import { PageableParams } from '../../../shared/interfaces/pageable-params';
import { ProductQueryRepository } from '../adapters/repository/product-query-repository/product-query-repository';
import { ProductModel } from '../domain/models/product-model';
import { ProductQueryOutRepository } from '../domain/ports/product-query-out-repository';
import { ProductQueryService } from '../domain/services/product-query-service';
@Injectable({
  providedIn: 'root',
})
export class ProductQueryApplication implements ProductQueryService {
  private readonly productQueryOutRepository: ProductQueryOutRepository =
    inject(ProductQueryRepository);

  findAllPageable(page: number, size: number, category?: number): Promise<ProductModel[]> {
    // create params
    let params: PageableParams = {
      page,
      size,
    };
    // validate category
    if (category) {
      params = {
        ...params,
        filters: {
          category,
        },
      };
    }
    return this.productQueryOutRepository.findAllPageable(params);
  }
}
