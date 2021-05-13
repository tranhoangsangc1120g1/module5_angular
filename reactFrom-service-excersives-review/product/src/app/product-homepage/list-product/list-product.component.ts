import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductServiceService} from "../../productService/product-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {
  public productList:Product[]=[];
  constructor(private _productServiceService:ProductServiceService,
              private _router:Router) {
  }

  ngOnInit(): void {
   this._productServiceService.products.subscribe((data) =>{
     this.productList=data;
   },error =>{
     console.log(error)
   });
  }
  showDetail(index:number){
    console.log(index + "id nhan dc")
    this._router.navigate(["/detail",index])
  }
}
