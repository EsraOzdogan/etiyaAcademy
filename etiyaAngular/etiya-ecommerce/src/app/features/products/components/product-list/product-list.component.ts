import { Product } from './../../models/product';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'etiya-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList! : Product[];
  @Input() categoryId! : number;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productsService.getAll().subscribe((response => {
      this.productList = response;
    }))
  }

}
