import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
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
import { DashboardHomeComponent } from './pages/dashboard-home/dashboard-home.component';

import {SidebarModule} from 'primeng/sidebar';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MainLayoutComponent,
    DashboardLayoutComponent,
    LoadingSpinnerComponent,
    TableSkeletonComponent,
    DashboardHomeComponent,
  ],
  imports: [
    CommonModule, ProgressSpinnerModule, TableModule, SkeletonModule, RouterModule, SidebarModule,ButtonModule,
    BrowserModule,
    BrowserAnimationsModule
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
