import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor (private router: Router,) {}

  get currentRoute(): string {
    return this.router.url.split('?')[0];
  }

  get isHome(): boolean {
    return this.currentRoute.split('/').some((el) => ['home'].includes(el));
  }

}
