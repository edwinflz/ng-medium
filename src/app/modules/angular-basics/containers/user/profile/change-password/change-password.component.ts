import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordsMustBeEqual } from '@angular-basics/components/form-extensions';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangePasswordComponent  {

  passwordChangeForm = new FormGroup(
    {
      newPassword: new FormControl('', Validators.required),
      passwordConfirm: new FormControl('', Validators.required),
    },
    passwordsMustBeEqual
  );

  constructor() { }

}
