import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../interfaces/cart-item.interface';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input() cartItem!: CartItem;
  @Output() cartItemDelete = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onDeleteClicked(): void {
    this.cartItemDelete.emit();
  }

}
