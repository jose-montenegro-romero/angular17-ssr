import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
// Services
import { CookiesService } from '@services/cookies/cookies.service';
import { SpotifyAuthService } from '../services/spotify/spotifyAuth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const ssrCookieService = inject(CookiesService);
  const spotifyAuthService = inject(SpotifyAuthService);
  const token: string = ssrCookieService.get('token');

  if (!req.headers.has('Authorization')) {
    if (token) {
      req = addToken(req, token);
    }
  }

  // if (!token) {
  //   spotifyAuthService.getAccessToken().subscribe((data: any) => {
  //     console.log(data);
  //     ssrCookieService.set('token', data.access_token);
  //     return next(req);
  //   });
  // }

  return next(req);
  //     // return next.handle(request);
  //     return next.handle(request).pipe(
  //       catchError((error: HttpErrorResponse) => {

  //         // if (error.error instanceof ErrorEvent)
  //         // if (error instanceof HttpErrorResponse && error.status === 401) {
  //         //   localStorage.clear();
  //         //   this.document.location.href = '/';
  //         // }

  //         // if (error instanceof HttpErrorResponse) {
  //         //   return throwError(error);
  //         // }

  //         return throwError(() => error)

  //       })
  //     ) as any;
  //   }
};

function addToken(request: HttpRequest<unknown>, token: string) {
  return request.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });
}
