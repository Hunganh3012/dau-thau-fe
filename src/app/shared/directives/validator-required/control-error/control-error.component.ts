import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'app-control-error',
  standalone: true,
  imports: [CommonModule, NzToolTipModule],
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorComponent {
  private cdr = inject(ChangeDetectorRef);
  error = '';
  hide = true;

  @Input()
  set text(value: string) {
    if (value !== this.error) {
      this.error = value;
      this.hide = !value;
      this.cdr.markForCheck();
    }
  }
}
