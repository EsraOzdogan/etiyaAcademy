import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'src/app/models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiControllerUrl : string = `${environment.apiUrl}/customers`;  //property

  constructor(private httpClient: HttpClient) { }

  register(customer: Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(this.apiControllerUrl,customer)  //2. parametre customer body

  }
}
