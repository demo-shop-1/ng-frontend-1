import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { patchState, signalStore, withHooks, withMethods, withState } from '@ngrx/signals';
import { CategoryQueryApplication } from '../../features/categories/application/category-query-application';
import { CategoryModel } from '../../features/categories/domain/model/category-model';
type AppState = {
  showSidenav: boolean;
  categories: CategoryModel[];
  isWeb: boolean;
};

const initialState: AppState = {
  showSidenav: false,
  categories: [],
  isWeb: false,
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
  })),
  withHooks((store) => {
    const responsiveManager = inject(BreakpointObserver);
    const breakpointsMobile = [Breakpoints.XSmall, Breakpoints.Small];
    return {
      onInit() {
        responsiveManager
          .observe(breakpointsMobile)
          .pipe(takeUntilDestroyed())
          .subscribe((result) => {
            patchState(store, { isWeb: !result.matches });
          });
      },
    };
  })
);
