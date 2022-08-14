import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StorageModule } from './storage/storage.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    AuthModule,
    StorageModule
  ],
  providers : [
    {provide: HTTP_INTERCEPTORS, useClass : LoadingInterceptor, multi : true}
  ]
})
export class CoreModule { }
