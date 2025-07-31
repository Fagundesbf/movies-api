import { TestBed } from '@angular/core/testing';
import { AuthAuthenticationInterceptor } from './auth-authentication.interceptor';


describe('AuthAuthenticationInterceptor', () => {
  let service: AuthAuthenticationInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthAuthenticationInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
