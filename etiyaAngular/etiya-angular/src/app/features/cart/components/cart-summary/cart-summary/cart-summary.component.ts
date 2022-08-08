import { CartItem } from './../../../models/cartItem';
import { CartService } from './../../../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  cartItems!:CartItem[];

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.showCartSummary();
  }

  showCartSummary(){
    this.cartService.addCart.subscribe(data =>{     //event'e abone olarak degisiklikleri yakalıyorum
      this.cartItems = data
      debugger
    })
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem)
  }

}
