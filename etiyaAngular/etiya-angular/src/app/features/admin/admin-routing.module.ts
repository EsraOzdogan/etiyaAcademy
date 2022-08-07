import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'dashboard/customer',
  //   component: CustomerDashboardComponent
  // },
  // ...['dashboard/customer/add', 'dashboard/customer/edit/:id'].map(path => ({
  //   path,
  //   component: CustomerDashboardFormComponent
  // })),

  // {
  //   path: 'dashboard/product',
  //   component: ProductDashboardComponent
  // },
  // ...['dashboard/product/add', 'dashboard/product/:id'].map(path => ({
  //   path,
  //   component: ProductDashboardFormComponent
  // })),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
