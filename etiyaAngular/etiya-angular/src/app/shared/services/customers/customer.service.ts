import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../..//models/customer';
//import { ListResponseModel } from 'src/app/core/models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiControllerUrl : string = `${environment.apiUrl}/customers`;  //property

  constructor(private httpClient: HttpClient) { }

  // getList(page: number = 0, pageSize: number = 10): Observable<ListResponseModel<Customer>> {
  //   debugger

  //   return this.httpClient.get<ListResponseModel<Customer>>(`${this.apiControllerUrl}`, {params: { page, pageSize }
  //   });

  // }

  getList():Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.apiControllerUrl)
  }

  register(customer: Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(this.apiControllerUrl,customer)  //2. parametre customer body
  }

  getById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.apiControllerUrl}/${id}`);
  }

  add(customer: Customer):Observable<Customer>{
    return this.httpClient.post<Customer>(this.apiControllerUrl, customer)
  }

  update(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.apiControllerUrl}/${customer.id}`, customer);
  }

  delete(customer: Customer):Observable<Customer>{
    return this.httpClient.delete<Customer>(`${this.apiControllerUrl}/${customer.id}`)
  }
}
