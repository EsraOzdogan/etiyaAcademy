import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Product from 'src/app/features/products/models/product';
import { Category } from 'src/app/features/categories/models/category';
import { ProductService } from 'src/app/features/products/services/products/product.service';
import { Supplier } from 'src/app/features/suppliers/models/supplier';
import { CategoryService } from 'src/app/features/categories/services/category/category.service';
import { SupplierService } from 'src/app/features/suppliers/services/supplier/supplier.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm! : FormGroup;
  product!: Product;
  categoryList!:Category[];
  supplierList!:Supplier[];

  constructor(private formBuilder:FormBuilder,private activatedRoute:ActivatedRoute,
    private productService: ProductService, private router: Router,private toastr: ToastrService,
    private categoryService: CategoryService,
    private supplierService : SupplierService) { }

  ngOnInit(): void {
    this.getProductIdFromRoute();
    this.getSupplierList();
    this.getCategoryList();


  }

  createProductForm(): void{
    this.productForm = this.formBuilder.group({
      name: [this.product?.name  || '',Validators.required],
      supplierId: [this.product?.supplierId || '',Validators.required],
      categoryId: [this.product?.categoryId || '',Validators.required],
      quantityPerUnit: [this.product?.quantityPerUnit || '',Validators.required],
      unitPrice: [this.product?.unitPrice || '',Validators.required],
      unitsInStock: [this.product?.unitsInStock  || '',Validators.required],
      unitsOnOrder: [this.product?.unitsOnOrder || '',Validators.required],
      reorderLevel: [this.product?.reorderLevel  || '',Validators.required],
      discontinued: [this.product?.discontinued  || '',Validators.required],
    })
  }

  getSupplierList(){
    this.supplierService.getList().subscribe(data=>{
      this.supplierList =data;
  });
  }

  getCategoryList(){
    this.categoryService.getList().subscribe(data=>{
      this.categoryList =data;
  });
  }

  getProductIdFromRoute(){
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) this.getProductById(params['id']);
      else{
        this.createProductForm();
      };
    });
  }

  getProductById(id:number) {
    this.productService.getById(id).subscribe(data => {
      this.product = data;
      this.createProductForm();
    });
  }


  save(){
    if(this.product) this.update();
    else{
      this.add();
    }
  }

  update() {
    if (this.productForm.invalid) {
      this.toastr.warning('There are missing fields.');
      return;
    }
    const product:Product = Object.assign({id:this.product.id}, this.productForm.value);
      this.productService.update(product).subscribe(() => {
        setTimeout(() => {
          this.router.navigateByUrl("/dashboard/product");
          this.toastr.success("Product succesfully updated!","Update")
        }, 1000);
      });
  }

  add(){
    if (this.productForm.invalid) {
      this.toastr.warning('There are missing fields.');
      return;
    }

    const product:Product = {
      ...this.productForm.value,
    }

    this.productService.add(product).subscribe(response =>{
      setTimeout(() => {
        this.toastr.success("Product succesfully add!","Add")
        this.router.navigateByUrl("/dashboard/product");
      }, 1000);
    })
  }
}
