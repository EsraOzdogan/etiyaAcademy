import { ProductDashboardFormComponent } from './pages/product-dashboard/product-dashboard-form/product-dashboard-form.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { CustomerDashboardFormComponent } from './pages/customer-dashboard/customer-dashboard-form/customer-dashboard-form/customer-dashboard-form.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard/customer',
    component: CustomerDashboardComponent
  },
  ...['dashboard/customer/add', 'dashboard/customer/edit/:id'].map(path => ({
    path,
    component: CustomerDashboardFormComponent
  })),

  {
    path: 'dashboard/product',
    component: ProductDashboardComponent
  },
  ...['dashboard/product/add', 'dashboard/product/:id'].map(path => ({
    path,
    component: ProductDashboardFormComponent
  })),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
