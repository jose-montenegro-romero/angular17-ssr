import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookiesService } from '@services/cookies/cookies.service';

export const loginGuard: CanActivateFn = (route, state) => {
  const ssrCookieService = inject(CookiesService);
  const router = inject(Router);
  const token: string = ssrCookieService.get('token');

  if (!token) {
    router.navigateByUrl('/');
    return false;
  } else {
    return true;
  }
};
