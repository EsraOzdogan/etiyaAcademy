import { HomepageComponent } from './pages/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", redirectTo: 'homepage', pathMatch:"full"},  /*direkt homepage pathini calistiriyor*/
  {path:"homepage", component:HomepageComponent},  /*pathMatch-- kosul degistiren*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
