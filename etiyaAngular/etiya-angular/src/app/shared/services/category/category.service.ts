import { Category } from './../../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiControllerUrl:string= `${environment.apiUrl}/categories`;

  constructor(private httpClient:HttpClient ) { }

  getList():Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.apiControllerUrl)
  }

  getById(id: number): Observable<Category> {
    return this.httpClient.get<Category>(`${this.apiControllerUrl}/${id}`);
  }
}
