import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidatorRequiredDirective } from './directives/validator-required/validator-required.directive';
import { ControlErrorComponent } from './directives/validator-required/control-error/control-error.component';
import { ControlErrorContainerDirective } from './directives/validator-required/control-error-container.directive';
import { FormSubmitDirective } from './directives/validator-required/form-submit.directive';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ValidatorRequiredDirective,
    ControlErrorComponent,
    ControlErrorContainerDirective,
    FormSubmitDirective,
  ],
  exports: [
    ValidatorRequiredDirective,
    ControlErrorComponent,
    ControlErrorContainerDirective,
    FormSubmitDirective,
  ]
})
export class SharedModule { }
