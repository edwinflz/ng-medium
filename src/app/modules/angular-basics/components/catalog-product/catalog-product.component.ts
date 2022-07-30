import { Component, Input } from '@angular/core';

import { Product } from '@app/modules/angular-basics/core/interfaces/product.interface';
import { mapProductToCartItem } from '@app/modules/angular-basics/core/helpers/map-product-to-cart-item.helper';
import { ShoppingCartService } from '@app/modules/angular-basics/core/services/shopping-cart.service';

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
