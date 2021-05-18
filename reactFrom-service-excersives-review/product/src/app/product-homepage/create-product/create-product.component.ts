import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductServiceService} from "../../productService/product-service.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Product} from "../../model/product";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  rfProduct: FormGroup;
  product:Product;

  constructor(
    private _productService: ProductServiceService,
    private _router: Router,
    private _activeRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.rfProduct = new FormGroup({
      name: new FormControl(),
      id: new FormControl(),
      price: new FormControl(),
      date: new FormControl(),
      origin: new FormControl(),
      quantity: new FormControl()
    })
  }

  onSubmit() {
    if (this.rfProduct.valid) {
      this._productService.save(this.rfProduct.value).subscribe((data)=>{
        this._router.navigateByUrl("/home")
      })
      console.log(this.rfProduct.value)
    }
  }

  onResetPro() {
    this.rfProduct.reset()
  }
  editProduct(){
    this._activeRoute.paramMap.subscribe((params:ParamMap)=>{
      const id = parseInt(params.get('id'));
      console.log(id + 'la id nhan dc');
      this._productService.getProductById(id).subscribe((data)=>{
        this.product=data;
      });
    })
  }
}
