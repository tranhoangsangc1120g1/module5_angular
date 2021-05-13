import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductServiceService} from "../../productService/product-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  rfProduct: FormGroup;

  constructor(
    private _productService: ProductServiceService,
    private _router: Router) {
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
}
