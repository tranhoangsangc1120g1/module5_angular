import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/Product";

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  public origin:string[]=['VN','CN','USA','ENG'];
  public productDetail:Product;
  public product:Product;
  public productEdit:Product;
  public productList:Product[]=[
    new Product(1,"dien thoai di dong", 1000, new Date('2021-06-05'), 5, this.origin[0]),
    new Product(2,"ti vi di dong", 2000, new Date('2021-07-05'), 10, this.origin[1]),
    new Product(3,"dien thoai ban", 3000, new Date('2021-06-10'), 0, this.origin[2]),
    new Product(4,"ti vi ban", 1000, new Date('2021-06-10'), 20, this.origin[3])
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  showDetailProduct(pro: Product) {
    this.productDetail=pro;
  }

  addNew(item: Product) {
    this.productList.push(item)
  }

}
