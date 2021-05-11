import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../../../model/Product";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  @Output('productNew') newProduct = new EventEmitter<Product>()
  public product:Product;
  constructor() {
  }

  ngOnInit(): void {
  }

  createProduct(id: string, name: string, price: string, date: string, quantity: string, origin: string) {
    this.product=new Product(parseInt(id),name,parseInt(price),new Date(date),parseInt(quantity),origin)
    this.newProduct.emit(this.product);
  }
}
