import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ApisCallService } from '@interceptors-examples/services/apis-call.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-https',
  styles: [
    '.card { margin: 20px; }',
    'pre { background: #f2f1f1; padding: 10px; border-radius: 8px}',
  ],
  template: `
    <mat-card class="card">
      <img mat-card-image src="https://miro.medium.com/max/831/1*pmStfKOAl5uAAIcNsvWRLQ.png">
      <mat-card-title>Response</mat-card-title>
      <mat-card-content>
        <pre>{{ response | async | json }}</pre>
      </mat-card-content>
      <mat-divider inset></mat-divider>
      <mat-card-actions>
        <button mat-raised-button color="primary" (click)="run()">Run</button>
      </mat-card-actions>
    </mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HttpsComponent {
  response!: Observable<any> | null;

  constructor(private apisCallService: ApisCallService) {}

  run(): void {
    this.response = this.apisCallService.runHttps();
  }
}
