import { SharedModule } from './../../shared/shared.module';
import { ServiceFormComponent } from './components/service-form/service-form.component';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';

import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceDashboardComponent } from './pages/service-dashboard/service-dashboard.component';

import {BreadcrumbModule} from 'primeng/breadcrumb';

import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceFormComponent,
    ServiceDashboardComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BreadcrumbModule
  ],
  exports : [
    ServiceDashboardComponent
  ]
})
export class ServicesModule { }
