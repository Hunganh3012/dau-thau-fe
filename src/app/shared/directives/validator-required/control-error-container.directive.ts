import { Directive, inject, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[controlErrorContainer]',
  standalone: true,
})
export class ControlErrorContainerDirective {
  vcr = inject(ViewContainerRef);
}
