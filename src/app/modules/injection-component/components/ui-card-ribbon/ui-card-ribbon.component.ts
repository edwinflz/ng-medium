import { ChangeDetectionStrategy, Component, Host } from '@angular/core';
import { UiCardComponent } from '@injection-component/components/ui-card/ui-card.component';

@Component({
  selector: 'app-ui-card-ribbon',
  templateUrl: './ui-card-ribbon.component.html',
  styleUrls: ['./ui-card-ribbon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiCardRibbonComponent {
  constructor(@Host() private card: UiCardComponent) {
    this.card.hasRibbon = true;
  }
}
