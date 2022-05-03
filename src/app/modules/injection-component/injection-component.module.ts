import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InjectionComponentRoutingModule } from './injection-component-routing.module';
import { InjectionComponentComponent } from './container/injection-component.component';
import { UiCardComponent } from './components/ui-card/ui-card.component';
import { UiCardRibbonComponent } from './components/ui-card-ribbon/ui-card-ribbon.component';
import { UiChessQuoteComponent } from './components/ui-chess-quote/ui-chess-quote.component';
import { UiChessQuoteNextDirective } from './directives/ui-chess-quote-next.directive';


@NgModule({
  declarations: [
    InjectionComponentComponent,
    UiCardComponent,
    UiCardRibbonComponent,
    UiChessQuoteComponent,
    UiChessQuoteNextDirective
  ],
  imports: [
    CommonModule,
    InjectionComponentRoutingModule
  ]
})
export class InjectionComponentModule { }
