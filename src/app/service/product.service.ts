import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { IProduct } from '../model/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  API_URL:string = "http://localhost:3000/products";

  getProducts(){
   return this.http.get<IProduct>(this.API_URL);
  };

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_URL}/${id}`);
  };

  removeProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_URL}/${id}`)
  };

  addProduct(data: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.API_URL, data)
  };

  editProduct(id: number, data: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API_URL}/${id}`, data)
  }
}
