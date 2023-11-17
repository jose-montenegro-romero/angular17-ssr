import { Routes } from '@angular/router';
// Services
import { HomeService } from '@services/home.service';
import { SpotifyService } from '@services/spotify/spotify.service';

export const routes: Routes = [
  {
    path: '',
    providers: [HomeService, SpotifyService],
    loadComponent: () =>
      import('./pages/home/home.component').then((mod) => mod.HomeComponent),
  },
  {
    path: ':id',
    providers: [HomeService],
    loadComponent: () =>
      import('./pages/home-detail/home-detail.component').then(
        (mod) => mod.HomeDetailComponent
      ),
  },
];
