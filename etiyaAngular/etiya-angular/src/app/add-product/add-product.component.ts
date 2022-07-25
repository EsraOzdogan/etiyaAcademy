import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  email!:string;  //baslangic degeri yok  //inputtaki degerin anında degismesi ve input degerinin de anında alınması icin ngModule
  password!:string;
  constructor() { }

  ngOnInit(): void {
    this.email = "e@gmail.com";
    //this.onEmailChange(); //this.email ="e@gmail.com" olarak yazıldığında çalışmıyor o nedenle
  }

  // onEmailChange(){
  //   console.log(`Değer değişti: ${this.email}`)
  // }

  // onEmailChange(event:string){
  //   console.log(`Değer değişti: ${event}`)
  // }

  onEmailChange(event:string){
    if(!event.includes("@")){
      console.log("Hatalı çalıştı")
    }
    else{
      console.log(`Değer değişti: ${event}`)
    }
  }
}
