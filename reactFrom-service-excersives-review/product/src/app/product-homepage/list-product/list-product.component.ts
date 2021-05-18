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

  ITEMS = ["name", "price", "origin", "date"];

  selected = "name";

  constructor(private _productServiceService:ProductServiceService,
              private _router:Router) {
  }

  ngOnInit(): void {
   this.loadData();
  }

  loadData (): void {
    this._productServiceService.products.subscribe(res =>{
      this.productList = res;
    },error =>{
      console.log(error)
    });
  }

  deleteItem(id: number): void {
    this._productServiceService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

  search(keywords: string) {
    console.log(keywords, this.selected);
    this._productServiceService.search(keywords, this.selected).subscribe(res => {
      this.productList = res;
    });
  }
}
