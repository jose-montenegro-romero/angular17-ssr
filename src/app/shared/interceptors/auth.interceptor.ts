import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
// Services
import { CookiesService } from '@services/cookies/cookies.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const ssrCookieService = inject(CookiesService);
  const token: string = ssrCookieService.get('token');
  // const token: string =
  //   'BQCNfWO4UOwwI9Yt8-6IihE6FC0omEmmqu3ahoLIlJi4Sk5bzUbv35oSYZ4QtvqdBeh893AW0W7Ky2Zh3uqL1_6qAuqHPZ1Cg67TFz6fDU7_R0WHuCA';

  if (!req.headers.has('Authorization')) {
    if (token) {
      req = addToken(req, token);
    }
  }
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
