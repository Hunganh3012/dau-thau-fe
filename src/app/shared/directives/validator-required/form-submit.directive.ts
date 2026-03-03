import { Directive, ElementRef, inject } from '@angular/core';
import { fromEvent } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Directive({
  selector: 'form',
  standalone: true,
})
export class FormSubmitDirective {
  private host = inject(ElementRef<HTMLFormElement>);

  submit$ = fromEvent(this.element, 'submit').pipe(
    tap(() => {
      if (!this.element.classList.contains('submitted')) {
        this.element.classList.add('submitted');
      }
    }),
    shareReplay(1)
  );


  get element(): HTMLFormElement {
    return this.host.nativeElement;
  }
}
