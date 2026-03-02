import { FormGroup } from '@angular/forms';

export class FormUtils {
  static validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control) {
        control.markAsTouched({ onlySelf: true });

        if ((control as any).controls) {
          this.validateAllFormFields(control as FormGroup);
        }
      }
    });
  }
}
