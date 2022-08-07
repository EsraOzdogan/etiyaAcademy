import { ReactiveFormsModule } from '@angular/forms';
import { CustomerFormComponent } from './pages/customer-form/customer-form/customer-form.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';


@NgModule({
  declarations: [
    CustomerDashboardComponent,
    CustomerFormComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomersModule { }
