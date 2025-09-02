import { CategoryModel } from '../../domain/model/category-model';
import { CategoryGetOneResponseDTO } from '../dto/category-get-one-response-dto';

export class CategoryMapper {
  static toCategoryModel(request: CategoryGetOneResponseDTO[]): CategoryModel[] {
    return request.map(
      (category): CategoryModel => ({
        id: category.id,
        name: category.name,
        isActive: category.isActive,
        description: category.description,
        dateCreated: category.dateCreated,
        lastUpdated: null,
        icon: null,
        translateKey: null,
        url: null,
      })
    );
  }
}
