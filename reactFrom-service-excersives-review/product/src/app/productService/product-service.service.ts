import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  private API_URL="http://localhost:3000/productList";
  constructor(private httpClient:HttpClient) { }


  get products():Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_URL)
  }

  save(product:Product):Observable<Product>{
    console.log(product)
    return  this.httpClient.post<Product>(this.API_URL,product)
  }

  getProductById(id:number):Observable<Product>{
    console.log(id)
    return this.httpClient.get<Product>(`${this.API_URL}/${id}`)
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.API_URL}/${id}`);
  }

  search(keySearch: string, options: string): Observable<Product[]> {
    let apiCustomize = this.API_URL + `?${options}_like=` + keySearch;
    return this.httpClient.get<Product[]>(apiCustomize);
  }
}
