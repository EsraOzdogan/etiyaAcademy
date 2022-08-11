import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../models/category';
import { environment } from 'src/environments/environment';

@Injectable(
//   {                           //sadece bu module de kullanıcaz
//   providedIn: 'root'
// }
)
export class CategoriesService {

  apiControllerUrl : string = `${environment.apiUrl}/categories`;
  constructor(private httpClient : HttpClient) { }

  getList(): Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.apiControllerUrl)
  }
}
