import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './product-homepage/list-product/list-product.component';
import { CreateProductComponent } from './product-homepage/create-product/create-product.component';
import { ShowDetailProductComponent } from './product-homepage/show-detail-product/show-detail-product.component';
import { ProductHomepageComponent } from './product-homepage/product-homepage.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    CreateProductComponent,
    ShowDetailProductComponent,
    ProductHomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
