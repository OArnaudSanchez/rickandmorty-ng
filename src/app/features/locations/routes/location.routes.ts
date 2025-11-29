import { Routes } from '@angular/router';

export const locationRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/location-page/location-page.component').then(
        (c) => c.LocationPageComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('../pages/location-detail/location-detail.component').then(
        (c) => c.LocationDetailComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
