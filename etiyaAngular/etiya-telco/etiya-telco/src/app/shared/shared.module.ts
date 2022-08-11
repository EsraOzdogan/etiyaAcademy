import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MainLayoutComponent,
    DashboardLayoutComponent,
  ],
  imports: [
    CommonModule
  ],
  exports : [
    NavbarComponent,
    FooterComponent,
    MainLayoutComponent,
    DashboardLayoutComponent
  ]
})
export class SharedModule { }
