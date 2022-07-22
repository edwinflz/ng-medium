import { Component, OnInit } from '@angular/core';
import { CartItem } from '@angular-basics/interfaces/cart-item.interface';

import { ShoppingCartService } from '@angular-basics/services/shopping-cart.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppingcartService: ShoppingCartService) {}

  ngOnInit(): void {}

  get cartItems(): CartItem[] {
    return this.shoppingcartService.items;
  }

  get total(): number {
    return this.shoppingcartService.total;
  }

  deleteItem(itemToDelete: CartItem): void {
    this.shoppingcartService.deleteItem(itemToDelete);
  }

}
