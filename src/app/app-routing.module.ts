import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const routes: Routes = [
  {
    path: "", 
    component: HomeComponent,
    children: [
      {
        path: "product",
        component: ProductsComponent
      },
      {
        path: "product/add",
        component: ProductAddComponent
      },
      {
        path: "product/edit/:id",
        component: ProductAddComponent
      },
      {
        path: "product/:id", 
        component: ProductDetailComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
