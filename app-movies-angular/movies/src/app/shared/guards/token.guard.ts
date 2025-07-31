import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';

export const tokenGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state) => {

  const tokenBearer = sessionStorage.getItem('Bearer');

  if(tokenBearer){

    return true;
  }
  return false;
};

