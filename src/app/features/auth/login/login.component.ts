import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@core/services';
import { NotificationService } from '@core/services';
import { FormUtils } from '@core/utils/form.utils';
import { ValidatorRequiredDirective } from '@shared/directives/validator-required/validator-required.directive';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, ValidatorRequiredDirective],
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
    console.log(this.form.invalid)
    if (this.form.invalid) {
      FormUtils.validateAllFormFields(this.form);
      return;
    }
    const { username, password } = this.form.value;

    if (username === 'master' && password === '1111') {
      this.router.navigateByUrl('/');
    } else {
      this.notification.showWarningMessage('Sai tài khoản hoặc mật khẩu');
    }
  }
}
