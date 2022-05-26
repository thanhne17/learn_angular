import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList!: any;
  constructor(private productService: ProductService) {
    this.showProduct()
  }

  ngOnInit(): void {
  }

  showProduct() {
    this.productService.getProducts().subscribe(data => {
      this.productList = data
    })
  }

  onRemove(id: number) {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm) {
      this.productService.removeProduct(id).subscribe(() => {
        // this.productList = this.productList.filter(item => item.id !== id);
      });
    }
  }

}
