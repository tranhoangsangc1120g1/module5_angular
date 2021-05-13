import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap} from "@angular/router";
import {ProductServiceService} from "../../productService/product-service.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-show-detail-product',
  templateUrl: './show-detail-product.component.html',
  styleUrls: ['./show-detail-product.component.scss']
})
export class ShowDetailProductComponent implements OnInit {
  public product:Product;
  constructor(private _activeRoute:ActivatedRoute,
              private _productService:ProductServiceService) { }

  ngOnInit(): void {
    this._activeRoute.paramMap.subscribe((params:ParamMap)=>{
      const id = parseInt(params.get('id'));
      console.log(id + 'la id nhan dc');
      this._productService.getProductById(id).subscribe((data)=>{
        this.product=data;
      });
    })
  }

  editProduct(product:Product,value:string) {
    product.quantity=parseInt(value);
    this._productService.save(this.product)
  }
}
