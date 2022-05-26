import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router"
import { ProductService } from 'src/app/service/product.service';
import { IProduct } from '../../model/product';


@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: IProduct = {
    name: "",
    price: 0,
    status: true
  }
  constructor(
    private  route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id")!;
    if (id) {
      this.productService.getProduct(id).subscribe(data => {
        this.product = data
      })
    }
  }

  onSubmit () {
    const id = +this.route.snapshot.paramMap.get("id")!;
    if (id) {
      this.productService.editProduct(id, this.product).subscribe(()=>{
        this.router.navigateByUrl("/product")
      })
    }
    else{
      this.productService.addProduct(this.product).subscribe(()=>{
        this.router.navigateByUrl("/product")
      })
    }
  }

}
