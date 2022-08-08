import { ProductListComponent } from './../../../products/components/product-list/product-list.component';
import { CartItem } from './../../models/cartItem';
import  Product  from 'src/app/features/products/models/product';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { CartItems } from '../../models/cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService { //singleton
  addCart : EventEmitter<any> = new EventEmitter;  //duyuru yapılacak olay (event)
  //@Output addCart : EventEmitter<any> = new EventEmitter;  --> @Output koymaya gerek yok html tarafaında kurtamak icin output koyuyoruz
   //CartItems:CartItem[]=[];

  constructor() { }

  get CartItems():any{  //cartService.CartItems
    return CartItems;
  }

  //get CartItems cartService.CartItems = new CartItem()
  addToCart(product: Product){    //cartService.addToCart(new CartItem())       --> yukardaki atama isleminden ziyade bu sekilde tanımlamak daha iyi
    let item = CartItems.find(c=>c.product.id===product.id);
    if(item){
      item.quantity+=1;
    }else{
      const newCartItem : CartItem = {product:product,quantity:1}
      // newCartItem.product = product;
      // newCartItem.quantity =1;
      debugger
      CartItems.push(newCartItem)
    }
    this.addCart.emit(CartItems)

  }

  // set CartItems(cartItem:CartItem){
  //   // console.log(value);
  //   // console.log(CartSummaryModels)
  //   let item = CartItems.find((c) => c.product.id === cartItem.product.id);
  //   if (item) ++item.quantity;
  //   else CartItems.push(cartItem);
  //   this.addCart.emit(CartItems)
  // }
  //

  removeFromCart(cartItem: CartItem){
    let item : any = CartItems.find(c=>c.product.id===cartItem.product.id);
    CartItems.splice(CartItems.indexOf(item),1);  //filter'da kullanılabilir
  }

  list():CartItem[]{
    return CartItems;
  }




}


// const cartService = new CartService();   //x2895896        CartItems:CartItem[]=[];

// new ProductListComponent(cartService)  //x2895896

// const CartService2 = new CartService();  //x89635464              CartItems:CartItem[]=[];
// new CartPageComponent(CartService2)      //x89635464


//Angular'da her service singleton olarak çalışıyor yani tek bir yerde instance oluşuyor ve o kullanılıyor
//Guardlar'da singleton çalışır
//Interceptor multi:true verince singleton çalışmasına engel olduk
