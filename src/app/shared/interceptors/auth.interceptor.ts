import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const clonedRequest = req.clone({
    setHeaders: {
      // Authorization: 'this_is_angular'
    }
  });
  return next(clonedRequest);
};
