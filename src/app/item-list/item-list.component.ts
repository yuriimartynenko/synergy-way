import { Component, OnInit } from '@angular/core';

import { ItemListService } from '../services/item-list.service';
import { CartService } from '../services/cart.service';
import { CartList } from '../interfaces/cart.interface';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: CartList[] = [];

  constructor(public itemListService: ItemListService, public cartService: CartService) {  }

  ngOnInit(): void {
    this.itemListService.getItems().subscribe(items => this.items = items);
  }

  addToCart(item: CartList): void {
    this.cartService.addToCart(item);
  }
}
