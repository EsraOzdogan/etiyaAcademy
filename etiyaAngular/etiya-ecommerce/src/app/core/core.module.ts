import { LoginComponent } from './auth/pages/login/login.component';
import { LoadingInterceptor } from './interceptors/loading-interceptor/loading.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CreateFakeArrayPipe } from './pipes/create-fake-array.pipe';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { StorageModule } from './storage/storage.module';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CreateFakeArrayPipe,
    LoadingOverlayComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    StorageModule,
    InputTextModule,      //for login page
    ButtonModule,
    ReactiveFormsModule,
  ],
  exports : [CreateFakeArrayPipe, LoadingOverlayComponent],
  providers : [{provide : HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true}]
})
export class CoreModule { }
