import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { CategoryQueryApplication } from '../../features/categories/application/category-query-application';
import { CategoryModel } from '../../features/categories/domain/model/category-model';
type AppState = {
  showSidenav: boolean;
  categories: CategoryModel[];
};

const initialState: AppState = {
  showSidenav: false,
  categories: [],
};

export const AppStore = signalStore(
  withState(initialState),
  withMethods((store, categoryQueryApplication = inject(CategoryQueryApplication)) => ({
    loadCategories() {
      if (store.categories.length === 0) {
        categoryQueryApplication.findAll().subscribe({
          next: (categories) => {
            patchState(store, { categories });
          },
        });
      }
    },
    openSidenav(newValue: boolean) {
      patchState(store, { showSidenav: newValue });
    },
  }))
);
