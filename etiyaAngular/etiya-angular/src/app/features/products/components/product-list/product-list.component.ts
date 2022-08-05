import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Product  from 'src/app/shared/models/product';
import { ProductService } from '../../services/products/product.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //productList : any[]=[]
  //productList !: any[]
  productList !: Product[]
  cartItems: any[]=[]
  //httpClient!: HttpClient --1

  dataLoaded = false;
  filterText="";


  status:string = "init";

  constructor(
    //private httpClient: HttpClient
    private productService: ProductService
    ) {  //Dependency Injection //Dependency Injection ile Angular otomatik olarak enjecte eder. //private vermezsen sadece bu constructorda kullanıyoruz, private der isek ve sadece parametre olarak alırsak bu sayfada this ile belirtiyoruz
    //this.httpClient = httpClient; ---2

    // this.productList.push(new ProductClass())
  }

  ngOnInit(): void {
    //this.fillProductData()
    setTimeout(()=>{
      this.getProducts()
  }, 1500);




  const value: string = "A";
  switch (value) {
    case "B":
      console.log('B', value)
      break;
      case "A":
        console.log('A', value)
        break;

    default:
      console.log('else', value)
      break;
  }

//Aynısı
  if(value==="B") console.log('B', value)
  else if(value==="A") console.log('A', value)
  else console.log('else', value)



  }

  // fillProductData(){
  //   this.productList=[
  //     {
  //     "id": 1,
  //     "companyName": "ALFREDS FUTTERKISTE",
  //     "contactName": "Maria Anders",
  //     "contactTitle": "Sales Representative",
  //     "street": "Obere Str. 57",
  //     "city": "Berlin",
  //     "region": "NULL",
  //     "postalCode": 12209,
  //     "country": "Germany",
  //     "phone": "030-0074321",
  //     "customerKey": "ALFKI"
  //   },
  //   {
  //     "id": 2,
  //     "companyName": "ANA TRUJILLO EMPAREDADOS Y HELADOS",
  //     "contactName": "Ana Trujillo",
  //     "contactTitle": "Owner",
  //     "street": "Avda. de la Constitución 2222",
  //     "city": "México D.F.",
  //     "region": "NULL",
  //     "postalCode": 5021,
  //     "country": "Mexico",
  //     "phone": "(5) 555-4729",
  //     "customerKey": "ANATR"
  //   },
  //   {
  //     "id": 3,
  //     "companyName": "ANTONIO MORENO TAQUERÍA",
  //     "contactName": "Antonio Moreno",
  //     "contactTitle": "Owner",
  //     "street": "Mataderos  2312",
  //     "city": "México D.F.",
  //     "region": "NULL",
  //     "postalCode": 5023,
  //     "country": "Mexico",
  //     "phone": "(5) 555-3932",
  //     "customerKey": "ANTON"
  //   },
  //   {
  //     "id": 4,
  //     "companyName": "AROUND THE HORN",
  //     "contactName": "Thomas Hardy",
  //     "contactTitle": "Sales Representative",
  //     "street": "120 Hanover Sq.",
  //     "city": "London",
  //     "region": "NULL",
  //     "postalCode": "WA1 1DP",
  //     "country": "UK",
  //     "phone": "(171) 555-7788",
  //     "customerKey": "AROUT"
  //   },
  //   {
  //     "id": 5,
  //     "companyName": "BERGLUNDS SNABBKÖP",
  //     "contactName": "Christina Berglund",
  //     "contactTitle": "Order Administrator",
  //     "street": "Berguvsvägen  8",
  //     "city": "Luleå",
  //     "region": "NULL",
  //     "postalCode": "S-958 22",
  //     "country": "Sweden",
  //     "phone": "0921-12 34 65",
  //     "customerKey": "BERGS"
  //   }
  // ]
  // }

  // addToCart(){        /*4*/            //parametresiz
  //   console.log("Product listteki component")
  // }


  // addToCart(productName:string){
  //   console.log(productName)
  //   let itemToFind = this.cartItems.find(c =>c ==productName);
  //   if(!itemToFind){
  //     this.cartItems.push(productName)
  //   }
  // }

  addToCart(product:Product){
    console.log(product.name)
    let itemToFind = this.cartItems.find(c =>c ==product.name);
    if(!itemToFind){
      this.cartItems.push(product.name)
    }
  }


  // getProducts(){
  //   //*   <>  Generic
  //   this.httpClient.get<Product[]>("http://localhost:3000/products")  //get request'i hazır
  //   .subscribe(response=>{    // response' u subscribe eder ve gözlemler
  //     console.log(response);
  //     // console.log(response[0]);    //response'un gelen datanın tipini bilmiyoruz bu nedenle get<Product> yaptık
  //     // [
  //     //   {},
  //     //   {}
  //     // ]
  //     console.log(response[0].name);
  //     this.productList=response;

  //   })
  // }

  getProducts(){
    this.status = 'loading;'
    this.productService.getList().subscribe(data=>{
      this.productList = data;
      this.dataLoaded = true;
      setTimeout(()=>{this.status = 'loaded';    }, 1000); })
  }

}
