import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Supplier } from '../../models/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  apiControllerUrl : string = `${environment.apiUrl}/suppliers`;  //property

  constructor(private httpClient: HttpClient) { }

  getList():Observable<Supplier[]>{
    return this.httpClient.get<Supplier[]>(this.apiControllerUrl)
  }

  getById(id: number): Observable<Supplier> {
    return this.httpClient.get<Supplier>(`${this.apiControllerUrl}/${id}`);
  }
}

