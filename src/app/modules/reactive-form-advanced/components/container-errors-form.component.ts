import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-container-errors-form',
  styles: [
    `
      :host {
        font-size: 0.75rem;
        color: #bd0c0c;
        margin-bottom: 16px;
        margin-top: -8px;
        display: flex;
        flex-direction: column;
      }
    `,
  ],
  template: `<ng-container
    *ngIf="control && control.invalid && (control.dirty || control.touched)">
    <ng-content></ng-content>
  </ng-container>`,
})
export class ContainerErrorsFormComponent {
  @Input('inputControl') control!: AbstractControl | null;
}
