import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '@environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token: string = environment.token;

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
