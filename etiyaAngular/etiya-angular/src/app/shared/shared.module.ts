import { CartModule } from './../features/cart/cart.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from './../features/products/products.module';
import { CategoriesModule } from './../features/categories/categories.module';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    NavbarComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CategoriesModule,
    ProductsModule,
    BrowserModule,
    NgbModule,
    CartModule
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
