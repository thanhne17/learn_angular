import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './components/home/home.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { FormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    HomeComponent,
    ProductAddComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
