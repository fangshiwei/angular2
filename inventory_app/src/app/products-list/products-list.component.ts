import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'products-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  productList: Product[];

  onProductSelected: EventEmitter<Product>;

  currentProduct: Product;
  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if(!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {
  }

}