import { CartItem } from "../interfaces/cart-item.interface";
import { Product } from "../interfaces/product.interface";

export function mapProductToCartItem(product: Product): CartItem {
  const { imageUrl, name, price } = product;
  return { imageUrl, name, price };
}
