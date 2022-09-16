import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-safe-dom',
  styles: [
    '.card { margin: 20px; }',
    'pre { background: #f2f1f1; padding: 10px; border-radius: 8px}',
  ],
  template: `
    <mat-card class="card">
      <mat-card-title>[innerHtml]="htmlSnippet | safe: type"</mat-card-title>
      <mat-card-content>
        <pre [innerHtml]="htmlSnippet | safe: type"></pre>
      </mat-card-content>
      <mat-divider inset></mat-divider>
      <mat-card-actions>
        <button mat-raised-button color="primary" (click)="safe()">
          Dom Sanitizer
        </button>
        <button mat-raised-button color="warn" (click)="invalid()">
          Key Invalid
        </button>
      </mat-card-actions>
    </mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SafeDomComponent {

  htmlSnippet: string = '<div>Codigo con html</div>';
  type: string = 'html';

  constructor () {}

  safe(): void {
    this.type = 'html';
  }

  invalid(): void {
    this.type = 'something';
  }
}
