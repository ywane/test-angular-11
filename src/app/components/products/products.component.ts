import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../../services/products.service';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products?: Product[];
  // products?: Product[] | null=null;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onGetAllProducts() {
    this.productsService.getAllProducts().subscribe(data => {
      this.products = data;
    });
  }

  onSelectedProducts() {
    this.productsService.getSelectedProducts().subscribe(data => {
      this.products = data;
    });
  }

  onAvailableProducts() {
    this.productsService.getAvailableProducts().subscribe(data => {
      this.products = data;
    });
  }
}
