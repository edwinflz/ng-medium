import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { ShoppingCartService } from '@app/modules/angular-basics/core/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent  {

  @Output() toggleCartVisibility = new EventEmitter<void>();
  @Output() toggleMenu = new EventEmitter<void>();

  itemsCount$ = this.scService.itemsCount$;

  constructor(private scService: ShoppingCartService) {}

  onCartClicked(): void {
    this.toggleCartVisibility.emit();
  }

  onMenuClicked(): void {
    this.toggleMenu.emit();
  }

}
