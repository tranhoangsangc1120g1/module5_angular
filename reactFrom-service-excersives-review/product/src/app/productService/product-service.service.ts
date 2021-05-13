import { Injectable } from '@angular/core';
import {Product} from "../model/product";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
    // private _products:Product[]=[
    //   {id:1,name:"dien thoai di dong", price:1000,date: new Date('2021-06-05'),quantity: 0, origin:'VN'},
    //   {id:2,name:"dien thoai di dong", price:2000,date: new Date('2021-06-05'),quantity: 0, origin:'CN'},
    //   {id:3,name:"dien thoai di dong", price:3000,date: new Date('2021-06-05'),quantity: 15, origin:'USA'},
    //   {id:4,name:"dien thoai di dong", price:4000,date: new Date('2021-06-05'),quantity: 20, origin:'ENG'}
    // ]
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
}
