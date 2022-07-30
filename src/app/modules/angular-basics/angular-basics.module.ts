import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularBasicsRoutingModule } from './angular-basics-routing.module';
import { AngularBasicsComponent } from './angular-basics.component';
import { HeaderComponent } from './components/header/header.component';
import { ShoppingCartModule } from './components/shopping-cart/shopping-cart.module';
import { NavDrawerComponent } from './components/nav-drawer/nav-drawer.component';

@NgModule({
  declarations: [AngularBasicsComponent, HeaderComponent, NavDrawerComponent],
  imports: [
    CommonModule,
    AngularBasicsRoutingModule,
    ShoppingCartModule
  ]
})
export class AngularBasicsModule { }
