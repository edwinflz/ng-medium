import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CartItem } from '@angular-basics/core/interfaces/cart-item.interface';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartItemComponent {

  @Input() cartItem!: CartItem;
  @Output() cartItemDelete = new EventEmitter<void>();

  constructor() {}

  onDeleteClicked(): void {
    this.cartItemDelete.emit();
  }

}
