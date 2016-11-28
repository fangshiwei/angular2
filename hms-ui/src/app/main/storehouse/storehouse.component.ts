import { Component, OnInit } from '@angular/core';
import { Medicine } from '../medicine/medicine';

@Component({
  selector: 'app-storehouse',
  templateUrl: './storehouse.component.html',
  styleUrls: ['./storehouse.component.css']
})
export class StorehouseComponent implements OnInit {
  medAmts: Medicine[];
  constructor() { }

  ngOnInit() {
  }

}
