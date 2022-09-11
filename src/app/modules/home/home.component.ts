import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectHome } from './interface/projects-home.interface';
import { HomeService } from './service/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {

  projects$: Observable<ProjectHome[]> = this.homeService.getAllProjects();

  constructor(private homeService: HomeService) {}
}
