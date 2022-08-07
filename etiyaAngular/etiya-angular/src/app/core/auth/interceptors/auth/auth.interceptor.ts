import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private jwtHelperService: JwtHelperService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.jwtHelperService.tokenGetter();     // jwtHelperService ile token'ı alıyoruz ve isteği clonelıyoruz
    const newRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)   //her http isteğin headerına tokenı yerleştiriyoruz
    });

    return next.handle(newRequest); //bu tokenı backende gönderiyoruz
  }
}
