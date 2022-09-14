import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { ApisCallService } from '@interceptors-examples/services/apis-call.service';
import { LoaderService } from '@interceptors-examples/services/loader.service';

@Component({
  selector: 'app-loader',
  styles: [
    '.card { margin: 20px; }',
    'pre { background: #f2f1f1; padding: 10px; border-radius: 8px}',
  ],
  template: `
    <mat-card class="card">
      <mat-card-title>Response</mat-card-title>
      <mat-card-content>
        <pre>{{ response | async | json }}</pre>
      </mat-card-content>
      <mat-divider inset></mat-divider>
      <mat-card-actions>
        <button
          mat-raised-button
          color="primary"
          (click)="run()"
          [disabled]="loaderService.showLoader">
          Run
        </button>
      </mat-card-actions>
      <mat-card-footer>
        <mat-progress-bar
          *ngIf="loaderService.showLoader"
          mode="indeterminate">
        </mat-progress-bar>
      </mat-card-footer>
    </mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  response!: Observable<any> | null;

  constructor(
    private apisCallService: ApisCallService,
    public loaderService: LoaderService
  ) {}

  run(): void {
    this.response = this.apisCallService.runLoader();
  }
}
