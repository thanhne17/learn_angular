import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productDetail!: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    const id = this.route.snapshot.paramMap.get("id")!;
    this.productService.getProduct(+id).subscribe(data => {
      this.productDetail = data
    })
  }

  ngOnInit(): void {
  }

}
