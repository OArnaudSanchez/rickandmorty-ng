import { Routes } from '@angular/router';

export const characterRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/characters-page/characters-page.component').then(
        (c) => c.CharactersPageComponent
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
