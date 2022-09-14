import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reactive-form-advanced',
  styles: [
    `
      .container {
        max-width: 100%;
        padding: 20px;
      }
      mat-card-header {
        justify-content: center;
      }
    `,
  ],
  template: `<div class="container">
    <mat-card>
      <mat-card-header>
        <mat-card-title>Reactive Form Advanced</mat-card-title>
      </mat-card-header>
      <mat-card-content>
        <app-reactive-form></app-reactive-form>
      </mat-card-content>
    </mat-card>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormAdvancedComponent {}
