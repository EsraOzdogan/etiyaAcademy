import { DashboardHomeComponent } from './shared/pages/dashboard-home/dashboard-home.component';
import { AddProductComponent } from './features/products/pages/add-product/add-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './shared/layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      // {path: 'product/add', component: AddProductComponent},

      {path: '', component: DashboardHomeComponent, pathMatch: 'full'},
      {
        path: 'products',
        loadChildren: () =>
          import('./features/products/products-routing.module').then(       //product.routing.module.tsdeki pathler eklenir
            m => m.ProductsRoutingModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
