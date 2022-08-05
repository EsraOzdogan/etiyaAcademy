import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Product from 'src/app/shared/models/product';

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

  constructor() { }

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
    }

}
