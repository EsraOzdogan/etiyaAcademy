import { LocalStorageService } from './../storage/services/local-storage.service';
import { StorageService } from './../storage/services/storageService';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { StoreModule } from '@ngrx/store';
import { authReducers } from './store/auth.reducer';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from 'src/app/shared/shared.module';
import {PasswordModule} from 'primeng/password';
import { DividerModule } from "primeng/divider";
import {CheckboxModule} from 'primeng/checkbox';

export function jwtOptionsFactory(storageService: StorageService) {
  return {
    tokenGetter: () => {
      return storageService.get('token');
    },
    allowedDomains: ['localhost:3000'],
  };
}

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [LocalStorageService],
      },
    }),
    StoreModule.forRoot(authReducers),
    SharedModule,
    PasswordModule,
    DividerModule,
    FormsModule,
    CheckboxModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
})
export class AuthModule { }
