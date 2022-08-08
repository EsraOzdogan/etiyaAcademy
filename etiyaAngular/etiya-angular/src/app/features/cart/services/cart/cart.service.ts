import { CartItem } from './../../models/cartItem';
import  Product  from 'src/app/features/products/models/product';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { CartItems } from '../../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
   addCart : EventEmitter<any> = new EventEmitter;

  constructor() { }

  // addToCart(product: Product){
  //   let item = CartItems.find(c=>c.product.id===product.id);
  //   if(item){
  //     item.quantity+=1;
  //   }else{
  //     cartItem.product = product;
  //     cartItem.quantity =1;
  //     CartItems.push(cartItem)
  //     this.addCart.emit(CartItems)
  //   }
  // }

  set CartItems(cartItem:CartItem){
    // console.log(value);
    // console.log(CartSummaryModels)
    let item = CartItems.find((c) => c.product.id === cartItem.product.id);
    if (item) ++item.quantity;
    else CartItems.push(cartItem);
    this.addCart.emit(CartItems)
  }


  //

  removeFromCart(cartItem: CartItem){
    let item : any = CartItems.find(c=>c.product.id===cartItem.product.id);
    CartItems.splice(CartItems.indexOf(item),1);
  }

  list():CartItem[]{
    return CartItems;
  }


  get CartItems():any{
    return CartItems
  }

}
