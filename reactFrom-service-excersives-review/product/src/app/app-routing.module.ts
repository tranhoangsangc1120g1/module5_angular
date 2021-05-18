import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProductComponent} from "./product-homepage/list-product/list-product.component";
import {CreateProductComponent} from "./product-homepage/create-product/create-product.component";
import {ShowDetailProductComponent} from "./product-homepage/show-detail-product/show-detail-product.component";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {path:'home',component:ListProductComponent},
  {path:'create',component:CreateProductComponent},
  {path:'detail/:id',component:ShowDetailProductComponent},
  {path:'edit/:id',component:CreateProductComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
