import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CartItem } from '@angular-basics/core/interfaces/cart-item.interface';
import { ShoppingCartService } from '@angular-basics/core/services/shopping-cart.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoppingCartComponent {

  cartItems$ = this.shoppingcartService.items$;
  total$ = this.shoppingcartService.total$;

  constructor(private shoppingcartService: ShoppingCartService) {}

  deleteItem(itemToDelete: CartItem): void {
    this.shoppingcartService.deleteItem(itemToDelete);
  }

}
