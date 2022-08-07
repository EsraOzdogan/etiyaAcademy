import { LoginGuard } from './../../core/auth/guards/login/login.guard';
import { ProductFormComponent } from './pages/product-form/product-form.component';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';

const routes: Routes = [
  { path: 'add-product', component: AddProductComponent, canActivate: [LoginGuard] },
  {
    path: 'dashboard/products',
    component: ProductDashboardComponent
  },
  ...['dashboard/product/add', 'dashboard/product/:id'].map(path => ({
    path,
    component: ProductFormComponent
  })),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
