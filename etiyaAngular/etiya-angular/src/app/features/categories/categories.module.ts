import { CategoryListComponent } from './components/category-list/category-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';


@NgModule({
  declarations: [
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ],
  exports: [       //farklı modulde kullanabilsin diye , app module
  CategoryListComponent,
  ]
})
export class CategoriesModule { }
