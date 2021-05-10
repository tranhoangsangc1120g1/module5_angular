import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductHomepageComponent } from './product-homepage/product-homepage.component';
import { ListProductComponent } from './product-homepage/list-product/list-product.component';
import { CreateProductComponent } from './product-homepage/list-product/create-product/create-product.component';
import { ShowDetailProductComponent } from './product-homepage/list-product/show-detail-product/show-detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductHomepageComponent,
    ListProductComponent,
    CreateProductComponent,
    ShowDetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
