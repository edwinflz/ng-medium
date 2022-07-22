import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { UiChessQuoteComponent } from '@injection-component/components/ui-chess-quote/ui-chess-quote.component';

@Component({
  selector: 'app-injection-component',
  templateUrl: './injection-component.component.html',
  styleUrls: ['./injection-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InjectionComponentComponent  {

  @ViewChild('uiChessQuote', { read: UiChessQuoteComponent }) uiChessQuote!: UiChessQuoteComponent;
  showRibbon = true;

  constructor() {}

  nextQuote(): void {
    this.uiChessQuote.next();
  }

}
