import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDashboardFormComponent } from './pages/product-dashboard/product-dashboard-form/product-dashboard-form.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { CustomerDashboardFormComponent } from './pages/customer-dashboard/customer-dashboard-form/customer-dashboard-form/customer-dashboard-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    CustomerDashboardFormComponent,
    ProductDashboardComponent,
    ProductDashboardFormComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ]
})
export class AdminModule { }
