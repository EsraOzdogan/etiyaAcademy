import { CartItem } from './../../../cart/models/cartItem';
import { CartService } from './../../../cart/services/cart/cart.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from 'src/app/features/products/models/product';

@Component({
  selector: 'etiya-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  //@Input() product:any;
  @Input() product!:Product;
  @Output() onBtnClick: any = new EventEmitter()

  onMouseColor: string = 'blue';
  isCard: boolean = true;
  onSaleText: string = 'İndirim!!!';

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    console.log(this.product)
  }

  // addToCartEvent(){        /*2*/             //parametresiz
  //   this.onBtnClick.emit() //onBtnClick htmlde bulunan dosyayı calıstır
  // }


  // addToCartEvent(productName:string){
  // this.onBtnClick.emit(productName)
  // }




//----Aynı şey -this yukardan okuyor
  // addToCartEvent(product:Product){
  //   this.onBtnClick.emit(product)
  //   }


  addToCartEvent(){
    this.onBtnClick.emit(this.product)
    //this.cartService.CartItems = {product:this.product,quantity:1}     //yeni özellik eklenince sorun cıkar bu nedenle instance olustur
    //const newCartItem : CartItem = {product:this.product,quantity:1, name = 'nane'}

    // const newCartItem : CartItem = {product:this.product,quantity:1}
    // this.cartService.CartItems(newCartItem)

    this.cartService.addToCart(this.product)
  }


}
