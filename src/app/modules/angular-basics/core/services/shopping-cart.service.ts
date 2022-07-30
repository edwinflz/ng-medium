import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { CartItem } from '@angular-basics/core/interfaces/cart-item.interface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private _items = new BehaviorSubject<CartItem[]>([]);
  items$ = this._items.asObservable();

  itemsCount$: Observable<number> = this.items$.pipe(
    map((items) => items.length)
  );

  total$: Observable<number> = this.items$.pipe(
    map((items) => items.reduce((acc, { price }) => (acc += price), 0))
  );

  addItem(item: CartItem): void {
    this._items.next([...this._items.value, item]);
  }

  deleteItem(itemToDelete: CartItem): void {
    this._items.next(this._items.value.filter((item) => item !== itemToDelete));
  }

}
