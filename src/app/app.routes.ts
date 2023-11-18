import { Routes } from '@angular/router';
// Services
import { HomeService } from '@services/home.service';
import { SpotifyAuthService } from '@services/spotify/spotifyAuth.service';

export const routes: Routes = [
  {
    path: '',
    providers: [HomeService, SpotifyAuthService],
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
