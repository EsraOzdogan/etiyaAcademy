import { ServiceDashboardComponent } from './services/pages/service-dashboard/service-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './common/pages/homepage/homepage.component';

const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch:"full"},
  {path: 'homepage', component: ServiceDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
