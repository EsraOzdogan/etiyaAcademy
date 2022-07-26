import { ServiceDashboardComponent } from './pages/service-dashboard/service-dashboard.component';
import { HomepageComponent } from './../common/pages/homepage/homepage.component';
import { ServiceFormComponent } from './components/service-form/service-form.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'services-list',component:ServiceDashboardComponent},
  {path:'services',component:ServiceListComponent},
  {path:'add',component:ServiceFormComponent},
  {path:'service/:id',component:ServiceFormComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
