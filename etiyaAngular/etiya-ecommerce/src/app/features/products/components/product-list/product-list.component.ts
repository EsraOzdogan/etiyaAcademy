import { Product } from './../../models/product';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnChanges {
  productList! : Product[];
  @Input() categoryId! : number;
  fetchStatus = "pending";
  pageSize = 10; //sayfa basina düsen ürün ngFor
  //pageSizeList = []

  constructor(private productsService: ProductsService) { }

  ngOnChanges(changes: SimpleChanges): void {     //Componentteki degisikliklere takip etmek icin
    console.log(changes);
    this.getAllProductsByCategoryId();
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.getAllProducts();
    }, 1500);

    //this.pageSizeList.length = this.pageSize

  }

  getAllProductsByCategoryId() {
    if (!this.categoryId || this.categoryId <= 0) {        //Category'de All durumunda categoryId productsServicedeki getAllByCategories fonksiyonuna undefined gidecek bu nedenle kontrol ediyoruz. Categorylerin listelendiği itemslarda queryParamsda categoryId'ye backend ile anlasıp 0 vererek  kontrol edebiliriz.Ama gerek yok suan
      this.getAllProducts();
      return;
    }
    this.fetchStatus = 'pending';
    setTimeout(() => {
      this.productsService.getAllByCategories(this.categoryId).subscribe(
        (response) => {
          this.productList = response;
          this.fetchStatus = 'loaded';
        },
        (error) => {
          this.fetchStatus = 'error';
        }
      );
    }, 2000);
  }

  getAllProducts() {
    this.productsService.getAll().subscribe(
      (response) => {
        this.productList = response;
        this.fetchStatus = 'loaded';
      },
      (error) => {
        this.fetchStatus = 'error';
      }
    );
  }

}
