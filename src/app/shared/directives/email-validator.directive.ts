import { Directive } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {
  constructor() {}
  validate(control: AbstractControl): ValidationErrors | null {
    return myEmailValidator(control);
  }
}

export function myEmailValidator(control: AbstractControl): ValidationErrors | null {
  const emailRegexp =/\S+@\S+\.\S+/
  const invalid = !emailRegexp.test(control.value);
  return invalid ? { emailInvalid: { value: control.value } } : null;
}