import { ProductModel } from '../models/product-model';

export interface ProductQueryService {
  findAllPageable(page: number, size: number, category?: number): Promise<ProductModel[]>;
}
