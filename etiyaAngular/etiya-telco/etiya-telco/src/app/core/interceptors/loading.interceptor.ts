import { LoadingService } from './../services/loading.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.warn(request.method)

    // setTimeout(() => {

    //   if(request.method == "POST" || request.method == "PUT" || request.method == "DELETE"){
    //     this.loaderService.show();
    //   }
    //   else{
    //     this.loaderService.hide()
    //   }

    // }, 200);

    //  return next.handle(request).pipe(
    //        finalize(() => this.loaderService.hide()),
    //  );


    if (request.method != 'GET') this.loadingService.setIsLoading(true);

    return next.handle(request).pipe(
      finalize(() => {
        setTimeout(() => {
          this.loadingService.setIsLoading(false);
        }, 3000);
      })
    );
  }



}
