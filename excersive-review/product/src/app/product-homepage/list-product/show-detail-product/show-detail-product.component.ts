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
  constructor() { }

  ngOnInit(): void {
  }

  editProduct(productDetail:Product,addMore:number){
      this.productDetail.quantity=addMore;
    // @ts-ignore
    this.onEdit.emit(productDetail);
  }
}
