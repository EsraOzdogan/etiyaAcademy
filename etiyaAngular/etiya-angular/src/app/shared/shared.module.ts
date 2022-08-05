import { ProductsModule } from './../features/products/products.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterProductPipe } from './pipes/filterProduct/filter-product.pipe';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    FilterProductPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FilterProductPipe

  ]
})
export class SharedModule { }
