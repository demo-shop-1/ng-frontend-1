import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { CategoryModel } from '../../../domain/model/category-model';
import { CategoryQueryOutRepository } from '../../../domain/ports/out/category-query-out-repository';
import { CategoryGetAllResponseDTO } from '../../dto/category-get-all-response-dto';
import { CategoryMapper } from '../../mappers/category-mapper';

@Injectable({
  providedIn: 'root',
})
export class CategoryQueryRepository implements CategoryQueryOutRepository {
  private readonly http = inject(HttpClient);
  private readonly categoryUrl = environment.apiUrl + '/category';

  findAllCategories(): Observable<CategoryModel[]> {
    return this.http.get<CategoryGetAllResponseDTO>(this.categoryUrl).pipe(
      map((response) => {
        return CategoryMapper.toCategoryModel(response.content);
      })
    );
  }
}
