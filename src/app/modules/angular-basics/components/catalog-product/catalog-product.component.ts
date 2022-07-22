import { Component, Input } from '@angular/core';

import { Product } from '@angular-basics/interfaces/product.interface';
import { mapProductToCartItem } from '@angular-basics/helpers/map-product-to-cart-item.helper';
import { ShoppingCartService } from '@angular-basics/services/shopping-cart.service';

@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.scss']
})
export class CatalogProductComponent {

  @Input() product!: Product;

  constructor(private scService: ShoppingCartService) {}

  addToCart(): void {
    const cartItem = mapProductToCartItem(this.product);
    this.scService.addItem(cartItem);
  }

}
