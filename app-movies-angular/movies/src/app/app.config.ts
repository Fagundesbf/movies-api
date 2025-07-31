import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { routes } from './app.routes';
import { authAuthenticationInterceptor } from './interceptors/auth-authentication/auth-authentication.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
      provideHttpClient(
      withInterceptors([
       authAuthenticationInterceptor
      ])
    ),
    importProvidersFrom(ReactiveFormsModule),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)]
};
