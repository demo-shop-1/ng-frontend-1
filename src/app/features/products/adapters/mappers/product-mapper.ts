import { ProductModel } from '../../domain/models/product-model';
import { ProductSingleResponseDTO } from '../dto/product-single-response-dto';

export class ProductMapper {
  static toProductModel(request: ProductSingleResponseDTO[]): ProductModel[] {
    return request.map(
      (product): ProductModel => ({
        id: 0,
        sku: product.sku,
        name: product.name,
        categoryId: product.categoryId,
        description: product.description,
        unitPrice: product.unitPrice,
        imageUrl: product.imageUrl,
        isActive: product.isActive,
        unitsInStock: product.unitsInStock,
        dateCreated: product.dateCreated,
        lastUpdated: product.lastUpdated,
      })
    );
  }
}
