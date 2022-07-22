import { Component, Host, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import {
  ContainerErrorsFormComponent
} from '@reactive-form-advanced/components/container-errors-form/container-errors-form.component';
import { errorsDictionary } from './constants/dictionary-errors.constant';

@Component({
  selector: 'app-message-errors-form',
  templateUrl: './message-errors-form.component.html',
})
export class MessageErrorsFormComponent implements OnInit {

  @Input('InputErrorCode') errorCode!: string;
  @Input() customMsg: string | null = null;
  control!: AbstractControl | null;

  constructor(@Host() private errorContainer: ContainerErrorsFormComponent) { }

  get errorMsg(): string {

    if (!!this.customMsg) {
      return this.customMsg;
    }

    if (!!this.errorCode && errorsDictionary[this.errorCode] !== undefined) {
      return errorsDictionary[this.errorCode];
    }

    return `Hay un error en el campo. (code: ${this.errorCode})`;
  }


  ngOnInit(): void {
    this.control = this.errorContainer.control;
  }

}
