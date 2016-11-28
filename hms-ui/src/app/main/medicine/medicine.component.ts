import { Component, OnInit } from '@angular/core';
import { Medicine } from './medicine';
import { MedicineService } from './medicine.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  medAmts: Medicine[];
  totalCount: number;
  currentPage: number = 1;
  pageSize: number = 5;
  totalPage: number = 0;
  isPagination: string = 'Y';

  constructor(public medicineService: MedicineService) { }

  ngOnInit() {
    this.searchMedicine();
  }

  searchMedicine():void{
    this.medicineService.queryMedicine(this.isPagination, this.currentPage, this.pageSize)
      .subscribe((results: [number, number, Medicine[]]) => {
        this.totalCount = results[1];
        this.medAmts = results[2];
        this.totalPage = Math.ceil((this.totalCount/this.pageSize));
      },
      (err: any) => {
        console.log(err);
      },
      () => {
      }
    );
  }

  previous():void{
    if(this.currentPage-1<=0){
      alert("this is first page");
    }else{
      this.currentPage--;
      this.searchMedicine();
    }
  }

  next():void{
    if(this.currentPage + 1 > this.totalPage){
      alert("this is last page");
    }else{
      this.currentPage ++ ;

      console.log("current page:",  + this.currentPage);

      this.searchMedicine();
    }
  }

  expToWareHouse(medAmt: Medicine, storeAmt: HTMLInputElement): boolean{
    console.log(`Adding Medicine: ${storeAmt.value}`);
    medAmt.amountStorehouse = 1 + (Number)(storeAmt.value);
    return false;
  }
}
