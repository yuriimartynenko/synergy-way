import { Item } from './item-list.interface';

export interface CartList extends Item {
  quantity: number;
}
