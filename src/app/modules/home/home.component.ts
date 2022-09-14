import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectHome } from './interface/projects-home.interface';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  styles: [
    `
      .container {
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        .card {
          max-width: 300px;
          max-height: 205px;
          height: 205px;
          margin-right: 15px;
          p {
            height: 60px;
          }
        }
      }
    `,
  ],
  template: `
  <div class="container">
    <mat-card
      class="card"
      *ngFor="let project of projects$ | async; let index = index">
      <mat-card-subtitle># {{ index + 1 }}</mat-card-subtitle>
      <mat-card-title>{{ project.title }}</mat-card-title>
      <mat-card-content>
        <p>{{ project.description }}</p>
      </mat-card-content>
      <mat-divider inset></mat-divider>
      <mat-card-actions>
        <button mat-raised-button color="primary" [routerLink]="project.link">
          GO
        </button>
      </mat-card-actions>
    </mat-card>
  </div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  projects$: Observable<ProjectHome[]> = this.homeService.getAllProjects();
  constructor(private homeService: HomeService) {}
}
