import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { checkUsernameIsAvailable } from '@angular-basics/components/form-extensions';
import { UserService } from '@angular-basics/core/services/user.service';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.component.html',
  styleUrls: ['./change-username.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeUsernameComponent  {

  newUsernameControl = new FormControl('miNombreActual', {
    asyncValidators: checkUsernameIsAvailable(this.userService),
    updateOn: 'blur',
  });

  constructor(private userService: UserService) {}
}
