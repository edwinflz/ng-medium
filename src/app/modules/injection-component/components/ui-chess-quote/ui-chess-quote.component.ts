import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-chess-quote',
  templateUrl: './ui-chess-quote.component.html',
  styleUrls: ['./ui-chess-quote.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UiChessQuoteComponent {

  @Input() showRibbon = false;
  @Input() title!: string;

  constructor(private cdr: ChangeDetectorRef) {}

  quotes: string[] = [
    "Congratulations! You are an excellent analyzer of hypothetical end game positions that never actually happened.",
    "Congratulations! You are a great winner of the exchange.",
    "Congratulations! You have just beaten a grand master in under ten moves ",
  ];
  selected = 0;

  get quote(): string {
    return this.quotes[this.selected % this.quotes.length];
  }

  next(): void {
    this.selected += 1;
    this.cdr.detectChanges();
  }

}
