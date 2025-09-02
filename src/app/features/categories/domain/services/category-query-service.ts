import { Observable } from 'rxjs';
import { CategoryModel } from '../model/category-model';
export interface CategoryQueryService {
  findAll(): Observable<CategoryModel[]>;
}
