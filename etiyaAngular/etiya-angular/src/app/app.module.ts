import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductsModule } from './features/products/products.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AdminModule } from './features/admin/admin.module';
import { CustomersModule } from './features/customers/customers.module';
import { CategoriesModule } from './features/categories/categories.module';
import { SuppliersModule } from './features/suppliers/suppliers.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CoreModule,
    SharedModule,
    AdminModule,
    CustomersModule,
    CategoriesModule,
    SuppliersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
