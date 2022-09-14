import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ApisCallService } from '@interceptors-examples/services/apis-call.service';

@Component({
  selector: 'app-error',
  styles: ['.card { margin: 20px; }'],
  template: `
    <mat-card class="card">
      <img mat-card-image src="https://miro.medium.com/max/4200/1*3pSl1OkXa6VDdCbM_daeQw.png">
      <mat-card-actions>
        <button mat-raised-button color="primary" (click)="run()">Run</button>
      </mat-card-actions>
    </mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorComponent {

  constructor(private apisCallService: ApisCallService) {}

  run() {
    this.apisCallService.runError().subscribe();
  }
}
