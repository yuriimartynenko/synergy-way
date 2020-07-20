import { Component, OnInit } from '@angular/core';

import { CartService } from '../services/cart.service';
import { CartList } from '../interfaces/cart.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: CartList[] = [];
  sum = 0;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.cartList = this.cartService.getCartList();
    this.sum = this.cartService.countSum();
  }


  deleteItem(item: CartList): void {
    this.cartService.deleteItem(item);
    this.cartList = this.cartService.getCartList();
    this.sum = this.cartService.countSum();
  }

  changeQuantity(event, item: CartList): any {
    this.cartService.changeQuantity(event, item);
    this.sum = this.cartService.countSum();
  }

  increaseItem(item: CartList): void {
    this.cartService.increaseItem(item);
    this.sum = this.cartService.countSum();
  }

  decreaseItem(item: CartList): void {
    this.cartService.decreaseItem(item);
    this.sum = this.cartService.countSum();
  }

}
