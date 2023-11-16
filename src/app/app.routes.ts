import { Routes } from '@angular/router';
// Services
import { HomeService } from './shared/services/home.service';

export const routes: Routes = [
    {
        path: "",
        providers: [
            HomeService
        ],
        loadComponent: () => import('./pages/home/home.component').then(mod => mod.HomeComponent)
    },
    {
        path: ":id",
        providers: [
            HomeService
        ],
        loadComponent: () => import('./pages/home-detail/home-detail.component').then(mod => mod.HomeDetailComponent)
    }
];
