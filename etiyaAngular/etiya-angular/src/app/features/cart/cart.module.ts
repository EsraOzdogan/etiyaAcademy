import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsModule } from './../products/products.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartSummaryComponent } from './components/cart-summary/cart-summary/cart-summary.component';


@NgModule({
  declarations: [
    CartSummaryComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ProductsModule,
    NgbModule
  ],
  exports : [CartSummaryComponent]
})
export class CartModule { }
