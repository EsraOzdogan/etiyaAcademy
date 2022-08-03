import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProductComponent } from './pages/add-product/add-product.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryComponent } from './components/category/category.component';
import { RegisterComponent } from './pages/register/register.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { CustomerDashboardFormComponent } from './pages/customer-dashboard/customer-dashboard-form/customer-dashboard-form/customer-dashboard-form.component';


import { ToastrModule } from 'ngx-toastr';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { ProductDashboardFormComponent } from './pages/product-dashboard/product-dashboard-form/product-dashboard-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VatPipe } from './pipes/vat/vat.pipe';
import { SaleDirective } from './directives/sale/sale.directive';
import { FilterProductPipe } from './pipes/filterProduct/filter-product.pipe';
import { ClickDirective } from './directives/click/click.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AddProductComponent,
    HomepageComponent,
    NavbarComponent,
    ProductCardComponent,
    CategoryComponent,
    RegisterComponent,
    CustomerDashboardComponent,
    CustomerDashboardFormComponent,
    ProductDashboardComponent,
    ProductDashboardFormComponent,
    VatPipe,
    SaleDirective,
    FilterProductPipe,
    ClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
