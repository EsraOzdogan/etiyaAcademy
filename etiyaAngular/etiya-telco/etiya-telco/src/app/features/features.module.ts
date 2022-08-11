import { SharedModule } from './../shared/shared.module';
import { CustomersModule } from './customers/customers.module';
import { ServicesModule } from './services/services.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomepageComponent } from './common/pages/homepage/homepage.component';


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ServicesModule,
    CustomersModule,
    SharedModule
  ]
})
export class FeaturesModule { }
