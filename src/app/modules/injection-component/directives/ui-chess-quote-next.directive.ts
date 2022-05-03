import { Directive, Host, HostListener } from '@angular/core';
import { UiChessQuoteComponent } from '../components/ui-chess-quote/ui-chess-quote.component';

@Directive({
  selector: '[appUiChessQuoteNext]',
})
export class UiChessQuoteNextDirective {

  constructor(@Host() private quoteComponent: UiChessQuoteComponent) {}

  @HostListener('click', ['$event']) onClick() {
    this.quoteComponent.next();
  }

}
