import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./features/shared/pages/home-page/home-page.component').then(
        (c) => c.HomePageComponent
      ),
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./features/characters/routes/character.routes').then(
        (routeModule) => routeModule.characterRoutes
      ),
  },
  {
    path: 'locations',
    loadChildren: () =>
      import('./features/locations/routes/location.routes').then(
        (routeModule) => routeModule.locationRoutes
      ),
  },
  {
    path: 'episodes',
    loadChildren: () =>
      import('./features/episodes/routes/episode.routes').then(
        (routeModule) => routeModule.episodesRoute
      ),
  },

  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];
