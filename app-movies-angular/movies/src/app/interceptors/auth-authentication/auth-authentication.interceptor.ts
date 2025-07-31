import { HttpInterceptorFn } from '@angular/common/http';

export const authAuthenticationInterceptor : HttpInterceptorFn = (req, next) => {
  const token = sessionStorage.getItem('Bearer');

  if (token) {

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  return next(req);
};


