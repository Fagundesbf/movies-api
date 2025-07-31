import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { LoginRequest, LoginResponse } from '../../../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private httpClient = inject(HttpClient);

  postAuthLogin(form: LoginRequest) {
    return this.httpClient
      .post<LoginResponse>(`${environment.urlRequest}/auth/login`, form, {
         headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      })
  }
}
