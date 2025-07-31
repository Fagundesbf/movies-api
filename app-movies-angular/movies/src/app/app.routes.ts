import { Routes } from '@angular/router';
import { tokenGuard } from './shared/guards/token.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.component').then(
        (page) => page.LoginComponent
      ),
  },
  {
    path: 'home',
    canActivate: [tokenGuard],
    loadComponent: () =>
      import('./pages/home/home.component').then((page) => page.HomeComponent),
  },
  {
    path: 'favorite',
    canActivate: [tokenGuard],
    loadComponent: () =>
      import('./pages/favorite/favorite.component').then(
        (page) => page.FavoriteComponent
      ),
  },
];
