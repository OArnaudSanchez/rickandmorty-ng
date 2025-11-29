import { Routes } from '@angular/router';

export const episodesRoute: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/episodes-page/episodes-page.component').then(
        (c) => c.EpisodesPageComponent
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
