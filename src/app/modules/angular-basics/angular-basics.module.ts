import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularBasicsRoutingModule } from './angular-basics-routing.module';
import { AngularBasicsComponent } from './container/angular-basics.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';


@NgModule({
  declarations: [AngularBasicsComponent, ShoppingCartComponent, ShoppingCartItemComponent],
  imports: [
    CommonModule,
    AngularBasicsRoutingModule
  ]
})
export class AngularBasicsModule { }
