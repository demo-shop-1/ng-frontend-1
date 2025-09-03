import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CategoryQueryRepository } from '../adapters/repository/category-query-api/category-query-api';
import { CategoryMenuEnum } from '../domain/enums/category-menu-enum';
import { CategoryModel } from '../domain/model/category-model';
import { CategoryQueryOutRepository } from '../domain/ports/out/category-query-out-repository';
import { CategoryQueryService } from '../domain/services/category-query-service';

@Injectable({ providedIn: 'root' })
export class CategoryQueryApplication implements CategoryQueryService {
  private readonly categoryQueryOutRepository: CategoryQueryOutRepository =
    inject(CategoryQueryRepository);

  findAll(): Observable<CategoryModel[]> {
    return this.categoryQueryOutRepository.findAllCategories().pipe(
      map((categories) => {
        const activeCategories = categories.filter((c) => c.isActive);
        activeCategories.forEach((c) => {
          // Set url, icon, translate key
          if (c.id === CategoryMenuEnum.BOOKS.id) {
            c.icon = CategoryMenuEnum.BOOKS.icon;
            c.urlRouter = CategoryMenuEnum.BOOKS.url;
            c.translateKey = CategoryMenuEnum.BOOKS.translateKey;
            c.image = CategoryMenuEnum.BOOKS.image;
          }
          if (c.id === CategoryMenuEnum.MUGS.id) {
            c.icon = CategoryMenuEnum.MUGS.icon;
            c.urlRouter = CategoryMenuEnum.MUGS.url;
            c.translateKey = CategoryMenuEnum.MUGS.translateKey;
            c.image = CategoryMenuEnum.MUGS.image;
          }
          if (c.id === CategoryMenuEnum.PADS.id) {
            c.icon = CategoryMenuEnum.PADS.icon;
            c.urlRouter = CategoryMenuEnum.PADS.url;
            c.translateKey = CategoryMenuEnum.PADS.translateKey;
            c.image = CategoryMenuEnum.PADS.image;
          }
          if (c.id === CategoryMenuEnum.TAGS.id) {
            c.icon = CategoryMenuEnum.TAGS.icon;
            c.urlRouter = CategoryMenuEnum.TAGS.url;
            c.translateKey = CategoryMenuEnum.TAGS.translateKey;
            c.image = CategoryMenuEnum.TAGS.image;
          }
        });

        return activeCategories;
      })
    );
  }
}
