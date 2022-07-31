import { CustomerDashboardComponent } from './pages/customer-dashboard/customer-dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { CustomerDashboardFormComponent } from './pages/customer-dashboard/customer-dashboard-form/customer-dashboard-form/customer-dashboard-form.component';

const routes: Routes = [
  {path:"", redirectTo: 'homepage', pathMatch:"full"},  /*direkt homepage pathini calistiriyor*/
  {path:"homepage", component:HomepageComponent},  /*pathMatch-- kosul degistiren*/
  {path:"add-product", component: AddProductComponent},
  {path:"register", component: RegisterComponent},

  {
    path: 'dashboard/customer',
    component: CustomerDashboardComponent
  },
  ...['dashboard/customer/add', 'dashboard/customer/edit/:id'].map(path => ({
    path,
    component: CustomerDashboardFormComponent
  })),


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
