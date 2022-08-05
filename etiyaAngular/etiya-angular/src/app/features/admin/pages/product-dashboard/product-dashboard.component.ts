import { Router } from '@angular/router';
import  Product  from 'src/app/shared/models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/features/products/services/products/product.service';
import { CategoryService } from 'src/app/shared/services/category/category.service';
import { SupplierService } from 'src/app/shared/services/supplier/supplier.service';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.css']
})
export class ProductDashboardComponent implements OnInit {
  productList! : Product[];
  categoryName!:string;
  supplierName!:string;
  categoryId!:number;
  supplierId!: number;
  constructor(private productService :ProductService, private router:Router, private categoryService: CategoryService,
    private supplierService : SupplierService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productService.getList().subscribe(response =>{
     this.productList = response;
     this.productList.forEach(element => {
      this.categoryId = element.categoryId;
      this.supplierId = element.supplierId;
     });
     this.getCategoryNameById(this.categoryId);
      this.getSupplierNameById(this.supplierId);

   })
 }

 getCategoryNameById(id:number){
  this.categoryService.getById(id).subscribe(data=>{
    this.categoryName =data.name
  })
 }

 getSupplierNameById(id:number){
  this.supplierService.getById(id).subscribe(data=>{
    this.supplierName =data.companyName
  })
 }


 selectedProductId(selectedProduct: Product):void{
  this.router.navigateByUrl(`dashboard/product/${selectedProduct.id}`);
}


 deleteProduct(product:Product){
  if(confirm("Are you sure to delete??")){
    this.productService.delete(product).subscribe()
  }
  setTimeout(() => {
    this.getAll();
  }, 1000);
}
}
