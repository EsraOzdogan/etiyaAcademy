import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'etiya-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product:any;

  @Output() onBtnClick: any = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log(this.product)
  }

  // addToCartEvent(){        /*2*/             //parametresiz
  //   this.onBtnClick.emit() //onBtnClick htmlde bulunan dosyayı calıstır
  // }


  addToCartEvent(productName:string){
  this.onBtnClick.emit(productName)
  }
}
