import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ApisCallService } from '@interceptors-examples/services/apis-call.service';

@Component({
  selector: 'app-header',
  styles: ['.card { margin: 20px; }'],
  template: `
    <mat-card class="card">
    <img mat-card-image src="https://miro.medium.com/max/4200/1*vmBPhIYLBxgvEItZEusheA.png">
      <mat-card-actions>
        <button mat-raised-button color="primary" (click)="run()">Run</button>
      </mat-card-actions>
    </mat-card>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(private apisCallService: ApisCallService) {}
  run() {
    this.apisCallService.runHeader().subscribe();
  }
}
