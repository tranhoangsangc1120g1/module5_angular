import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../model/Product";

@Component({
  selector: 'app-show-detail-product',
  templateUrl: './show-detail-product.component.html',
  styleUrls: ['./show-detail-product.component.scss']
})
export class ShowDetailProductComponent implements OnInit {
  @Input('product')productDetail:Product|undefined;
  @Output('productEdit') onEdit = new EventEmitter<number>();
  public product:Product;
  constructor() { }

  ngOnInit(): void {
  }

  editProduct(productEdit:Product,value: string) {
    productEdit.quantity=parseInt(value)
    // @ts-ignore
    this.onEdit.emit(productEdit)
  }
}
