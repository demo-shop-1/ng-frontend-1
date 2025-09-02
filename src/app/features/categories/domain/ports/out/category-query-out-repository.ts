import { Observable } from 'rxjs';
import { CategoryModel } from '../../model/category-model';

export interface CategoryQueryOutRepository {
  findAllCategories(): Observable<CategoryModel[]>;
}
