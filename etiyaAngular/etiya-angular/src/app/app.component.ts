import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',   //componentin nasıl cagıralacagı
  templateUrl: './app.component.html',  //template:`<h2>Etiya</h2>` -->böyle html de yazılır
  styleUrls: ['./app.component.css']  //Array--birden fazla style dosyaları alınabilir
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    console.log('app.component init fonksiyonu')
  }
  title = 'etiya-angular';
  name = "Esra Özdoğan";

  counter:number = 0;

  // links:string[]=["Home","Add Product","Product List" ]
  links:any[]=[{label:"Home", url:"/home"},{label:"Add Product", url:"/add-product"},{label:"Product List", url:"/product-list"}, ]


  // increase(){
  //   this.counter ++;  //this.counter AppComponent sınıfındaki counter
  // }


  // increase(count:number){
  //   this.counter += count;
  // }

  increase(count:number=1){ //dafeult
    this.counter += count;
  }

  getCounter(){
    return this.counter;
  }

  // get Counter(){   //getter
  //   return this.counter;
  // }

  get Counter(){   //getter
    return (
      this.counter.toString() + (this.counter <5 ? 'Çok az' : 'Çok fazla')
      )
  }
}
