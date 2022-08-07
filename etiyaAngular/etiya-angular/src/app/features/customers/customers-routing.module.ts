import { CustomerFormComponent } from './pages/customer-form/customer-form/customer-form.component';
import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'dashboard/customers',
      component: CustomerDashboardComponent
    },
    ...['dashboard/customer/add', 'dashboard/customer/edit/:id'].map(path => ({
      path,
      component: CustomerFormComponent
    })),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
