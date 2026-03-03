import { Directive, inject } from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';

@Directive({
    selector: '[required]',
    standalone: true,
})
export class ControlRequiredDirective {
    private controlDir = inject(NgControl);

    get control(): AbstractControl | null {
        return this.controlDir.control;
    }
}
