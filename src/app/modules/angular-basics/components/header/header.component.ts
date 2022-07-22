import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from '@angular-basics/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleCartVisibility = new EventEmitter<void>();

  constructor(private shoppingCartService: ShoppingCartService) {}

  get itemsCount(): number {
    return this.shoppingCartService.itemsCount;
  }

  ngOnInit(): void {}

  onCartClicked(): void {
    this.toggleCartVisibility.emit();
  }

}
