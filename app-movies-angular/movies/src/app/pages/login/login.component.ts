import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LoginRequest, LoginResponse } from '../../interfaces/auth.interfaces';
import { LoginService } from '../../shared/services/login/login.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  onDestroy$ = new Subject();

  private loginService = inject(LoginService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  form = this.fb.group({
    usuario: ['', Validators.required],
    senha: ['', Validators.required],
  });

  ngOnDestroy(): void {
    this.onDestroy$.unsubscribe();
  }
  callButtonLogin() {
    if (this.form.invalid) return;
    this.sendPost();
  }
  private sendPost() {
    this.loginService
      .postAuthLogin(this.form.value as LoginRequest)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe({
        next: (result: LoginResponse) => {
          alert(result.message);
          sessionStorage.setItem('Bearer', result.token);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          alert(err.error.message);
        },
      });
  }
}
