import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-container-errors-form',
  templateUrl: './container-errors-form.component.html',
  styleUrls: ['./container-errors-form.component.scss'],
})
export class ContainerErrorsFormComponent {

  @Input('inputControl') control!: AbstractControl | null;

  constructor() { }

}
