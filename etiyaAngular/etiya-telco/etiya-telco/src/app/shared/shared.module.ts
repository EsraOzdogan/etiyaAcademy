import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { TableSkeletonComponent } from './components/table-skeleton/table-skeleton.component';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MainLayoutComponent,
    DashboardLayoutComponent,
    LoadingSpinnerComponent,
    TableSkeletonComponent,
  ],
  imports: [
    CommonModule, ProgressSpinnerModule, TableModule, SkeletonModule
  ],
  exports : [
    NavbarComponent,
    FooterComponent,
    MainLayoutComponent,
    DashboardLayoutComponent,
    LoadingSpinnerComponent,
    TableSkeletonComponent
  ]
})
export class SharedModule { }
