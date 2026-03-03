import {
  AfterViewInit,
  ComponentRef,
  Directive,
  ElementRef,
  Host,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';
import { FORM_ERRORS } from './form-errors';
import { ControlErrorContainerDirective } from './control-error-container.directive';
import { EMPTY, merge, Observable, Subject } from 'rxjs';
import { FormSubmitDirective } from './form-submit.directive';
import { ControlErrorComponent } from './control-error/control-error.component';
import { takeUntil } from 'rxjs/operators';

type SafeAny = any;

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[formControl], [formControlName]',
  standalone: true,
})
export class ControlErrorsDirective implements OnInit, AfterViewInit, OnDestroy {
  ref?: ComponentRef<ControlErrorComponent>;
  container: ViewContainerRef;
  submit$: Observable<Event>;
  @Input() customErrors = {} as SafeAny;

  private destroyed$ = new Subject<void>();

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    private vcr: ViewContainerRef,
    @Optional() controlErrorContainer: ControlErrorContainerDirective,
    @Inject(FORM_ERRORS) private errors: SafeAny,
    @Optional() @Host() private form: FormSubmitDirective,
    private controlDir: NgControl
  ) {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  ngOnInit(): void {
    if (this.control?.valueChanges) {
      merge(this.submit$, this.control.valueChanges)
        .pipe(takeUntil(this.destroyed$))
        .subscribe(() => {
          this.handleError();
        });
    }
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  ngAfterViewInit(): void {
    this.setRequired();
  }

  private setRequired(): void {
    const formGroup = this.el.nativeElement.closest('.form-group') || this.el.nativeElement.querySelector('.form-group');

    if (!formGroup) return;

    const label = formGroup.getElementsByTagName('LABEL')[0];
    if (!label) return;

    if (this.validator) {
      const asterisk = label.getElementsByClassName('required-asterisk')[0];
      if (!asterisk) {
        setTimeout(() => {
          const sup = this.renderer.createElement('sup');
          this.renderer.addClass(sup, 'required-asterisk');
          this.renderer.addClass(sup, 'text-danger');
          const text = this.renderer.createText(' (*)');
          this.renderer.appendChild(sup, text);
          this.renderer.appendChild(label, sup);
        }, 0);
      }
    } else {
      const asterisk = label.getElementsByClassName('required-asterisk')[0];
      if (asterisk) {
        setTimeout(() => this.renderer.removeChild(label, asterisk), 0);
      }
    }
  }

  get control(): AbstractControl | null {
    return this.controlDir.control;
  }

  get validator(): boolean {
    if (!this.control) {
      return false;
    }

    if (this.control.validator) {
      const validators = this.control.validator({} as AbstractControl);
      if (validators?.['required']) {
        return true;
      }
    }

    return false;
  }

  setError(text: string): void {
    if (!this.ref) {
      const element = this.container.element.nativeElement.querySelector('.control-validator');
      if (element) {
        this.ref = this.vcr.createComponent(ControlErrorComponent);
      } else {
        this.ref = this.container.createComponent(ControlErrorComponent);
      }
    }

    this.ref.instance.text = text;
  }

  setStyleInvalid(): void {
    const elmControl = this.container.element.nativeElement.querySelector('.form-control');
    const elmInput = this.container.element.nativeElement;
    const iconInputNumber = this.container.element.nativeElement.querySelector('.ant-input-number-handler-wrap');
    const elmSelect = this.container.element.nativeElement.querySelector('.ant-select-selector');
    const iconSelectArrow = this.container.element.nativeElement.querySelector('.ant-select-arrow');
    const iconSelectSearch = this.container.element.nativeElement.querySelector('.ant-select-selection-search');
    const elmSelectMultiple = this.container.element.nativeElement.querySelector('.ant-select-multiple');
    const ckeditorContent = this.container.element.nativeElement.querySelector('.ck-editor__editable');
    const customWrapper =
      this.el.nativeElement.closest('.custom-select-inline') ||
      this.container.element.nativeElement.querySelector('.custom-select-inline');

    if (customWrapper) {
      customWrapper.style.border = 'solid 1px #ff0e0e';
      customWrapper.style.borderColor = '#ff0e0e';
      if (elmSelect) {
        elmSelect.style.border = 'none';
        elmSelect.style.paddingRight = '39px';
      }
      if (iconSelectArrow) {
        iconSelectArrow.style.right = '39px';
      }
      if (iconSelectSearch) {
        iconSelectSearch.style.right = '0';
        iconSelectSearch.style.width = '39px';
      }
      return;
    }

    if (elmControl) {
      elmControl.style.border = 'solid 1px #ff0e0e';
      elmControl.style.paddingRight = '39px';

      // === single === //
      // if (elmSelect.classList.contains('ant-select-single')) {
      //     elmSelect.style.paddingRight = '39px';
      // }
      // === End single === //
    }
    if (elmInput && !elmSelect && !elmControl && !ckeditorContent) {
      elmInput.style.border = 'solid 1px #ff0e0e';
      elmInput.style.paddingRight = '39px';
    }
    if (iconInputNumber) {
      iconInputNumber.style.right = '30px';
    }
    if (elmSelect) {
      elmSelect.style.border = 'solid 1px #ff0e0e';
      elmSelect.style.paddingRight = '39px';
    }

    if (iconSelectArrow) {
      iconSelectArrow.style.paddingRight = '39px';
    }
    if (iconSelectSearch && !elmSelectMultiple && elmSelectMultiple !== null && elmSelectMultiple !== undefined) {
      iconSelectSearch.style.right = '52px';
    }
    // === single=== //
    // if (iconSelectArrow && elmSelect?.classList.contains('ant-select-single')) {
    //     iconSelectArrow.style.paddingRight = '39px';
    // }
    // if (iconSelectSearch && elmSelect?.classList.contains('ant-select-single')) {
    //     iconSelectSearch.style.right = '52px';
    // }
    // === End single=== //

    if (ckeditorContent) {
      ckeditorContent.style.border = 'solid 1px #ff0e0e';
      ckeditorContent.style.paddingRight = '39px';
      ckeditorContent.style.position = 'relative';
    }
  }

  setStyleDefault(): void {
    const elmControl = this.container.element.nativeElement.querySelector('.form-control');
    const elmInput = this.container.element.nativeElement;
    const iconInputNumber = this.container.element.nativeElement.querySelector('.ant-input-number-handler-wrap');
    const elmSelect = this.container.element.nativeElement.querySelector('.ant-select-selector');
    const iconSelectArrow = this.container.element.nativeElement.querySelector('.ant-select-arrow');
    const iconSelectSearch = this.container.element.nativeElement.querySelector('.ant-select-selection-search');
    const elmSelectMultiple = this.container.element.nativeElement.querySelector('.ant-select-multiple');
    const ckeditorContent = this.container.element.nativeElement.querySelector('.ck-editor__editable');
    const customWrapper =
      this.el.nativeElement.closest('.custom-select-inline') ||
      this.container.element.nativeElement.querySelector('.custom-select-inline');

    if (customWrapper) {
      customWrapper.style.border = 'solid 1px #E0E0E0';
      customWrapper.style.borderColor = '#E0E0E0';
      if (elmSelect) {
        elmSelect.style.border = 'none';
        elmSelect.style.paddingRight = '11px';
      }
      if (iconSelectArrow) {
        iconSelectArrow.style.right = '11px';
      }
      if (iconSelectSearch) {
        iconSelectSearch.style.right = '11px';
      }
      return;
    }

    if (elmControl) {
      elmControl.style.border = '1px solid #ced4da';
      elmControl.style.paddingRight = '11px';
      // === single === //
      // if (elmSelect.classList.contains('ant-select-single')) {
      //     elmSelect.style.paddingRight = '11px';
      // }
      // === End single === //
    }
    if (elmInput && !elmSelect && !elmControl && !ckeditorContent) {
      elmInput.style.border = '1px solid #ced4da';
      elmInput.style.paddingRight = '11px';
    }
    if (iconInputNumber) {
      iconInputNumber.style.right = '0px';
    }
    if (elmSelect) {
      elmSelect.style.border = 'solid 1px #ced4da';
    }

    // === //

    if (iconSelectArrow) {
      iconSelectArrow.style.paddingRight = '11px';
    }
    if (iconSelectSearch && !elmSelectMultiple && elmSelectMultiple !== null && elmSelectMultiple !== undefined) {
      console.log(elmSelectMultiple);
      iconSelectSearch.style.right = '25px';
    }

    // === single=== //
    // if (iconSelectArrow && elmSelect?.classList.contains('ant-select-single')) {
    //     iconSelectArrow.style.paddingRight = '11px';
    // }
    // if (iconSelectSearch && elmSelect?.classList.contains('ant-select-single')) {
    //     iconSelectSearch.style.right = '25px';
    // }

    // === End single=== //

    if (ckeditorContent) {
      ckeditorContent.style.right = '25px';
    }
  }

  private handleError(): void {
    const controlErrors = this.control?.errors;
    if (controlErrors) {
      const firstKey = Object.keys(controlErrors)[0];
      const getError = this.errors[firstKey];
      let text = '';
      if (firstKey) {
        if (this.customErrors[firstKey]) {
          text = this.customErrors[firstKey];
        } else if (typeof getError === 'function') {
          text = getError(controlErrors[firstKey]);
        } else {
          text = controlErrors[firstKey] || 'Lỗi: ' + firstKey;
        }
        this.setError(text);
        this.setStyleInvalid();
        this.setRequired();
      }
    } else if (this.ref) {
      this.setError('');
      this.setStyleDefault();
      this.setRequired();
    }
  }
}

export { ControlErrorsDirective as ValidatorRequiredDirective };

