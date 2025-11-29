import { Routes } from '@angular/router';

export const locationRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/locations-page/locations-page.component').then(
        (c) => c.LocationsPageComponent
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
