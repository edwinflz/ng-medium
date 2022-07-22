import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function expiredCardDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    const value = control.value;
    if (!value) return null;
    const dates = value.split('/');
    if(dates.length !== 2) return null;

    const expiryMonth = dates[0].replace(/\s/g, '');
    const expiryYear = dates[1].replace(/\s/g, '');
    if (
      expiryYear &&
      expiryMonth.length === 2 &&
      (+expiryMonth >= 1 || +expiryMonth <= 12) && expiryYear.length === 2 &&
      (+expiryYear >= 1 || +expiryYear <= 99)
    ) {
      return null;
    } else {
      return { expiredCard: true };
    }
  };
}
