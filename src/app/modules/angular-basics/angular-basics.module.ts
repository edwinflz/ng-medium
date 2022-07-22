import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularBasicsRoutingModule } from './angular-basics-routing.module';
import { AngularBasicsComponent } from './container/angular-basics.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';
import { HeaderComponent } from './components/header/header.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { CatalogProductComponent } from './components/catalog-product/catalog-product.component';


@NgModule({
  declarations: [AngularBasicsComponent, ShoppingCartComponent, ShoppingCartItemComponent, HeaderComponent, CatalogComponent, CatalogProductComponent],
  imports: [
    CommonModule,
    AngularBasicsRoutingModule
  ]
})
export class AngularBasicsModule { }
