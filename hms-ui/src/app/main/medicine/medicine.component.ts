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
    this.queryMedicine(null);
  }

  queryMedicine(name: string):void{
    this.medicineService.queryMedicine(this.isPagination, this.currentPage, this.pageSize, name)
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
  refresh():void{
    this.currentPage = 1;
    this.queryMedicine("");
  }
  searchMedicine(name: string):void{
    console.log("searchMedicine:", name);
    this.currentPage = 1;
    this.queryMedicine(name);
  }

  previous():void{
    if(this.currentPage-1<=0){
      alert("this is first page");
    }else{
      this.currentPage--;
      this.queryMedicine("");
    }
  }

  next():void{
    if(this.currentPage + 1 > this.totalPage){
      alert("this is last page");
    }else{
      this.currentPage ++ ;
      this.queryMedicine("");
    }
  }

  expToWareHouse(medAmt: Medicine, storeAmt: any): boolean{
    // console.log(`Adding Medicine: ${storeAmt}`);
    if(medAmt.amountStorehouse==null){
      medAmt.amountStorehouse = 0;
    }
    medAmt.amountStorehouse = medAmt.amountStorehouse + Number(storeAmt);
    this.medicineService.expToWareHouse(medAmt)
      .subscribe((result:boolean)=>{
        if(result){
          console.log("add success");
        }else{
          medAmt.amountStorehouse = medAmt.amountStorehouse - Number(storeAmt);
        }
      },
      (err:any)=>{
        console.log(err);
      })
    
    return false;
  }
}
