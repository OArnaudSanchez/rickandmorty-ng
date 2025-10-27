import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/shared/pages/home-page/home-page.component').then(c => c.HomePageComponent)
    },
    {
        // TODO: Use children routes and define this in a separate file
        path: 'characters',
        loadComponent: () => import('./features/characters/pages/character-page/character-page.component').then(c => c.CharacterPageComponent)
    },
    {
        // TODO: Use children routes and define this in a separate file
        path: 'locations',
        loadComponent: () => import('./features/locations/pages/location-page/location-page.component').then(c => c.LocationPageComponent)
    },
    {
        // TODO: Use children routes and define this in a separate file
        path: 'episodes',
        loadComponent: () => import('./features/episodes/pages/episode-page/episode-page.component').then(c => c.EpisodePageComponent)
    },

    {
        path: '**',
        redirectTo: ''
    }
];
