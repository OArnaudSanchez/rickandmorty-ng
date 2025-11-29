import { Routes } from '@angular/router';

export const episodesRoute: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/episode-page/episode-page.component').then(
        (c) => c.EpisodePageComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('../pages/episode-detail/episode-detail.component').then(
        (c) => c.EpisodeDetailComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
