import { RegisterComponent } from './pages/register/register.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './pages/add-product/add-product.component';

const routes: Routes = [
  {path:"", redirectTo: 'homepage', pathMatch:"full"},  /*direkt homepage pathini calistiriyor*/
  {path:"homepage", component:HomepageComponent},  /*pathMatch-- kosul degistiren*/
  {path:"add-product", component: AddProductComponent},
  {path:"register", component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
