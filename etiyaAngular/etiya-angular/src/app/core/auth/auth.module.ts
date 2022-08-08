import { environment } from 'src/environments/environment';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { tokenGetter } from './services/auth.service';
import { AuthInterceptor } from './interceptors/auth/auth.interceptor';
import { StoreModule } from '@ngrx/store';
import { authReducers } from './store/auth.reducer';


@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({              //Jwt module --tokenı encode etmeyi sağlıyor
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [environment.apiUrl],
        disallowedRoutes: [],
      },
    }),
    StoreModule.forRoot(authReducers)
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }]
})
export class AuthModule { }
