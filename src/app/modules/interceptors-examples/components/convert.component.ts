import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisCallService } from '@interceptors-examples/services/apis-call.service';

@Component({
  selector: 'app-convert',
  styles: [
    '.card { margin: 20px; }',
    'pre { background: #f2f1f1; padding: 10px; border-radius: 8px}',
  ],
  template: `
    <mat-card class="card">
      <mat-card-content>
        <div style="display: flex; justify-content: center;">
          <div style="flex: 50%">
            <mat-card-title>Request</mat-card-title>
            <pre>{{ requestObj | json }}</pre>
          </div>
          <div style="flex: 50%; margin-left: 20px;">
            <mat-card-title>Response</mat-card-title>
            <pre>{{ response | async | json }}</pre>
          </div>
        </div>
      </mat-card-content>
      <mat-divider inset></mat-divider>
      <mat-card-actions>
        <button mat-raised-button color="primary" (click)="run()">Run</button>
      </mat-card-actions>
    </mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConvertComponent {
  requestObj = {
    Title: 'Mr',
    Name: 'Cool Cat',
    Id: 1,
  };
  response!: Observable<any>;
  constructor(private apisCallService: ApisCallService) {}

  run() {
    this.response = this.apisCallService.runConvert(this.requestObj);
  }
}
