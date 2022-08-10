import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServiceDashboardComponent } from './pages/service-dashboard/service-dashboard.component';
import { ServiceFormComponent } from './pages/service-form/service-form.component';

import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ServiceDashboardComponent,
    ServiceFormComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    TableModule,
    ButtonModule,
    ToolbarModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    ServiceDashboardComponent
  ]
})
export class ServicesModule { }
