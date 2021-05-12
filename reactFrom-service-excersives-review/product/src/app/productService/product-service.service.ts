import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
    private _products:Product[]=[
      {id:1,name:"dien thoai di dong", price:1000,date: new Date('2021-06-05'),quantity: 5, origin:'VN'},
      {id:2,name:"dien thoai di dong", price:2000,date: new Date('2021-06-05'),quantity: 10, origin:'CN'},
      {id:3,name:"dien thoai di dong", price:3000,date: new Date('2021-06-05'),quantity: 15, origin:'USA'},
      {id:4,name:"dien thoai di dong", price:4000,date: new Date('2021-06-05'),quantity: 20, origin:'ENG'}
    ]

  constructor() { }


  get products(): Product[] {
    return this._products;
  }

  save(product:Product){
    console.log(product)
    this._products.push(product)
  }

  getProductById(index:number){
    return this._products[index];
}
}
