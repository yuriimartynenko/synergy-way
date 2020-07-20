import { Injectable } from '@angular/core';
import { CartList } from '../interfaces/cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartList: CartList[] = [];

  constructor() {
    this.fetchCartListLS();
  }

  setLocalStorage(): void {
    localStorage.setItem('cartList', JSON.stringify(this.cartList));
  }

  fetchCartListLS(): void {
    this.cartList = JSON.parse(localStorage.getItem('cartList')) || [];
  }

  getCartList(): CartList[] {
    return this.cartList;
  }

  addToCart(item: CartList): void {
    const { id, name, label, price } = item;
    const alreadyAdded = this.cartList.find(el => el.id === id);
    if (alreadyAdded) {
      alreadyAdded.quantity++;
    } else {
      this.cartList = [...this.cartList, {id, name, label, price, quantity: 1}];
    }
    this.setLocalStorage();
  }

  deleteItem(item: CartList): void {
    this.cartList = this.cartList.filter(value => value !== item);
    this.setLocalStorage();
  }

  changeQuantity(event, item: CartList): void {
    const index = this.cartList.findIndex(value => value.id === item.id);
    if (index > -1) {
      this.cartList[index].quantity = event;
      this.setLocalStorage();
    }
  }

  increaseItem(item: CartList): void {
    const index = this.cartList.findIndex(value => value.id === item.id);
    if (index > -1) {
      this.cartList[index].quantity++;
      this.setLocalStorage();
    }
  }

  decreaseItem(item: CartList): void {
    const index = this.cartList.findIndex(value => value.id === item.id);
    if (index > -1) {
      if (this.cartList[index].quantity > 1) {
        this.cartList[index].quantity--;
      }
      this.setLocalStorage();
    }
  }

  countSum(): number {
    return this.cartList.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
