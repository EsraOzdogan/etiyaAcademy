import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from 'src/app/features/products/models/product';
import { environment } from 'src/environments/environment';
import { ProductsModule } from '../../products.module';

@Injectable({
  providedIn: 'root'    // providedIn: 'root' -- eski hali  ProductsModule
})
export class ProductService {

  // apiUrl = "http://http://localhost:3000"

  // apiUrl : string = environment.apiUrl;

  apiControllerUrl : string = `${environment.apiUrl}/products`;

  constructor(private httpClient: HttpClient) { }


  // getList(): Observable<Product[]> {
  //   return this.httpClient.get<Product[]>(`${this.apiUrl}/products`);
  // }

  // // getList(): any {   //any geri dönüs tipi
  // //   return "Yazı"
  // // }

  // getByıd(id:number): Observable<Product[]> {
  //   return this.httpClient.get<Product[]>(`${this.apiUrl}/products/${id}`);
  // }


  getList(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.apiControllerUrl}`);
  }

  // getList(): any {   //any geri dönüs tipi
  //   return "Yazı"
  // }

  getById(id:number): Observable<Product> {
    return this.httpClient.get<Product>(`${this.apiControllerUrl}/${id}`);
  }

  add(product: Product):Observable<Product>{
    return this.httpClient.post<Product>(this.apiControllerUrl, product)
  }

  update(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(`${this.apiControllerUrl}/${product.id}`, product);
  }

  delete(product: Product):Observable<Product>{
    return this.httpClient.delete<Product>(`${this.apiControllerUrl}/${product.id}`)
  }

}
