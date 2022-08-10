import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  apiControllerUrl:string=`${environment.apiUrl}/customers`

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.apiControllerUrl)
  }

  add(customer:Customer): Observable<Customer>{
    return this.httpClient.post<Customer>(this.apiControllerUrl,customer);
  }

  update(customer:Customer):Observable<Customer>{
    return this.httpClient.put<Customer>(`${this.apiControllerUrl}/${customer.id}`,customer)
  }

  delete(customer:Customer):Observable<Customer>{
    return this.httpClient.delete<Customer>(`${this.apiControllerUrl}/${customer.id}`)
  }

  getById(id:number):Observable<Customer>{
    return this.httpClient.get<Customer>(`${this.apiControllerUrl}/${id}`)
  }
}
