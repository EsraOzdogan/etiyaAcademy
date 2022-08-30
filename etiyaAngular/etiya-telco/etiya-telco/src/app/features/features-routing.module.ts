import { LoginPageComponent } from './../core/auth/pages/login-page/login-page.component';
import { ServiceDashboardComponent } from './services/pages/service-dashboard/service-dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './common/pages/homepage/homepage.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:"full"},
  {path: 'login', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
