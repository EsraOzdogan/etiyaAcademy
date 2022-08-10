import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  apiControllerUrl:string=`${environment.apiUrl}/services`

  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Service[]>{
    return this.httpClient.get<Service[]>(this.apiControllerUrl)
  }

  add(service:Service): Observable<Service>{
    return this.httpClient.post<Service>(this.apiControllerUrl,service);
  }

  update(service:Service):Observable<Service>{
    return this.httpClient.put<Service>(`${this.apiControllerUrl}/${service.id}`,service)
  }

  delete(service:Service):Observable<Service>{
    return this.httpClient.delete<Service>(`${this.apiControllerUrl}/${service.id}`)
  }

  getById(id:number):Observable<Service>{
    return this.httpClient.get<Service>(`${this.apiControllerUrl}/${id}`)
  }
}
