import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine/medicine';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  medAmts: Medicine[];

  constructor() { }

  ngOnInit() {
  }

}
