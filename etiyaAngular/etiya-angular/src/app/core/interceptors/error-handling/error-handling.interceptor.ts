import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorHandlingInterceptor implements HttpInterceptor {
  //Gelen istekleri yönetiyoruz
  //isteğin aynı şekilde gitmesini istiyoruz
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)        //Gelen istek cevaba göre islem yapıyoruz
    .pipe(catchError((errorResponse : HttpErrorResponse) => {         //Gelen istek cevabta hata olup olmadıgına bakıyor
      let errorMessage = '';
      if(errorResponse.error instanceof ErrorEvent){     //ErrorEvent'ten instance oluşturuyor, errorResponse.error objesinin hangi sınıftn extend edildigine göre instance olusturuyor
        errorMessage = `Client Side Error: ${errorResponse.error.message}`;                                   //Client side Angular hatası
      }else {
        errorMessage = `Server Side Error: ${errorResponse.error.message} Status Code: ${errorResponse.status}`;
      }                                                 //Server side bckend hatası

      console.debug(
        '🐞 ➜ file: error-handling.interceptor.ts ➜ line 18 ➜ ErrorHandlingInterceptor ➜ .pipe ➜ error',
        errorMessage
      );

      return throwError(errorMessage);
    })
    );
  }
}
