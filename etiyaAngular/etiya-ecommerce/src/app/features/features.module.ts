import { CategoriesModule } from './categories/categories.module';
import { ProductsModule } from './products/products.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomePageComponent } from './common/pages/homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ProductsModule,
    SharedModule,
    CategoriesModule,
    HttpClientModule
  ]
})
export class FeaturesModule { }
