import { Routes } from '@angular/router';

export const characterRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/character-page/character-page.component').then(
        (c) => c.CharacterPageComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('../pages/character-detail/character-detail.component').then(
        (c) => c.CharacterDetailComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
