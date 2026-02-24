import { Injectable, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AppConstant } from '../constants/app.constant';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private toastr = inject(ToastrService);

  showSuccessMessage(message: string) {
    this.toastr.success(message, AppConstant.TITLE, {
      timeOut: 5000,
      enableHtml: true,
    });
  }

  showErrorMessage(message: string) {
    this.toastr.error(message, AppConstant.TITLE, {
      timeOut: 5000,
      enableHtml: true,
    });
  }

  showWarningMessage(message: string) {
    this.toastr.warning(message, AppConstant.TITLE, {
      timeOut: 5000,
      enableHtml: true,
    });
  }

  showInfoMessage(message: string) {
    this.toastr.info(message, AppConstant.TITLE, {
      timeOut: 5000,
      enableHtml: true,
    });
  }
}
