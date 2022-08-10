import { ServiceFormComponent } from './pages/service-form/service-form.component';
import { ServiceDashboardComponent } from './pages/service-dashboard/service-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'services',component:ServiceDashboardComponent},
  {path:'add',component:ServiceFormComponent},
  {path:'service/:id',component:ServiceFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
