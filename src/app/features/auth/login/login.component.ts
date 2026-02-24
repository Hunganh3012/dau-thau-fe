import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@core/services';
import { NotificationService } from '@core/services';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);

  constructor(
    private authService: AuthService,
    private notification: NotificationService
  ) {
  }

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  login() {
    const { username, password } = this.form.value;

    if (username === 'master' && password === '1111') {
      this.router.navigateByUrl('/');
    } else {
      this.notification.showWarningMessage('Sai tài khoản hoặc mật khẩu');
    }
  }
}
