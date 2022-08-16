import { DashboardHomeComponent } from './shared/pages/dashboard-home/dashboard-home.component';
import { DashboardLayoutComponent } from './shared/layouts/dashboard-layout/dashboard-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {path: '', component: DashboardHomeComponent, pathMatch: 'full'},
      {
        path: 'services',
        loadChildren: () =>
          import('./features/services/services-routing.module').then(
            m => m.ServicesRoutingModule
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
