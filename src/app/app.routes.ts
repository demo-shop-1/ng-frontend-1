import { Routes } from '@angular/router';
import { AppHomeComponent } from './shared/pages/app-home-component';

export const routes: Routes = [
  // Home
  {
    path: '',
    component: AppHomeComponent,
  },
  // TODO: Login
  // TODO: Cart
  // Not Found
  {
    path: '404',
    loadComponent: () =>
      import('./shared/pages/app-not-found-component').then((m) => m.AppNotFoundComponent),
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];
