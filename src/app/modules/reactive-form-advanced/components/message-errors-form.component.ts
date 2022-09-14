import { Component, Host, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { ContainerErrorsFormComponent } from '@reactive-form-advanced/components/container-errors-form.component';
import { errorsDictionary } from '@reactive-form-advanced/constants/dictionary-errors.constant';

@Component({
  selector: 'app-message-errors-form',
  template: ` <p *ngIf="control?.hasError(errorCode)">
    {{ errorMsg }}
  </p>`,
})
export class MessageErrorsFormComponent implements OnInit {
  @Input('InputErrorCode') errorCode!: string;
  @Input() customMsg: string | null = null;
  control!: AbstractControl | null;

  constructor(@Host() private errorContainer: ContainerErrorsFormComponent) {}

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
