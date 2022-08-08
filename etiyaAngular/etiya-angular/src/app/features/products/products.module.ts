import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { CoreModule } from 'src/app/core/core.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SaleDirective } from './directives/sale/sale.directive';
import { VatPipe } from './pipes/vat/vat.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FilterProductPipe } from './pipes/filterProduct/filter-product.pipe';
import { AddProductComponent } from './pages/add-product/add-product.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent,
    AddProductComponent,
    SaleDirective,    //exporta gerek yok şuan, kullandığım componentler bu modulde
    VatPipe,
    FilterProductPipe,
    ProductDashboardComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports: [       //farklı modulde kullanabilsin diye , app module
  ProductListComponent,
  ProductCardComponent
  ]
})
export class ProductsModule { }
