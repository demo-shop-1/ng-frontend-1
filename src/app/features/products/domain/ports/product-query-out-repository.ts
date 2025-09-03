import { PageableParams } from '../../../../shared/interfaces/pageable-params';
import { ProductModel } from '../models/product-model';

export interface ProductQueryOutRepository {
  findAllPageable(params: PageableParams): Promise<ProductModel[]>;
}
