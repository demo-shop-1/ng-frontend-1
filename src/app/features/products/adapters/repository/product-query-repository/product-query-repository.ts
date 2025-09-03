import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom, map } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { PageableParams } from '../../../../../shared/interfaces/pageable-params';
import { ProductModel } from '../../../domain/models/product-model';
import { ProductQueryOutRepository } from '../../../domain/ports/product-query-out-repository';
import { ProductAllResponseDTO } from '../../dto/product-all-response-dto';
import { ProductMapper } from '../../mappers/product-mapper';

@Injectable({
  providedIn: 'root',
})
export class ProductQueryRepository implements ProductQueryOutRepository {
  private readonly http = inject(HttpClient);
  private readonly productUrl = environment.apiUrl + '/product';

  findAllPageable(params: PageableParams): Promise<ProductModel[]> {
    let httParams = new HttpParams().set('page', params.page).set('size', params.size);
    if (params.filters) {
      Object.entries(params.filters).forEach(([key, value]) => {
        httParams = httParams.set(key, value);
      });
    }
    return firstValueFrom(
      this.http.get<ProductAllResponseDTO>(this.productUrl, { params: httParams }).pipe(
        map((response) => {
          return ProductMapper.toProductModel(response.content);
        })
      )
    );
  }
}
