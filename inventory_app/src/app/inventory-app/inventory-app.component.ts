import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'inventory-app',
  templateUrl: './inventory-app.component.html',
  styleUrls: ['./inventory-app.component.css']
})
export class InventoryAppComponent implements OnInit {
  products : Product[];

  constructor() { 

    this.products =[new Product(
      'NICEHAT',
      'A Nice Black Hat',
      './app/resources/images/products/black-hat.jpg',
      ['Men', 'Accessories', 'Hats'],
      29.99
    ),
    new Product(
      'NEATOJACKET',
      'Blue Jacket',
      './app/resources/images/products/blue-jacket.jpg',
      ['Women', 'Apparel', 'Jackets & Vests'],
      29.99
    ),
    new Product(
      'MYHSOES',
      'Black Running Shoes',
      './app/resources/images/products/black-shoes.jpg',
      ['Men', 'Shoes', 'Running Shoes'],
      29.99
    )
    ]

  }

  productWasSelected(product : Product): void {
    console.log('Product clicked: ', product );
  }

  ngOnInit() {
  }

}
