import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Medicine } from './medicine';

import 'rxjs/add/operator/map';

import { 
    Http, 
    Response 
} from '@angular/http';

@Injectable()
export class MedicineService {
  constructor(public http: Http) { }

  queryMedicine(isPagination: string, page: number, pageSize: number, name: string) : Observable<[number, number, Medicine[]]>{

    let queryUrl: string = 'http://localhost:8080/hms/medicineAmt/list';
    return this.http.post(queryUrl,
        {
          isPagination: isPagination,
          currentPage: page,
          numPerPage: pageSize,
          name: name
        }
      ).map((response:Response)=>{
        var resJson = response.json();
        // console.log(resJson);
        var totalCount = resJson.totalCount;
        var currentPage = resJson.currentPage;
        var numPerPage = resJson.numPerPage;
        var medicines: Medicine[]=[];
        resJson.data.map(
          item=>{
            // console.log("raw item", item);
            medicines.push( new Medicine({
            id: item.medId,
            name: item.name,
            type: item.type,
            amountWarehouse: item.amountWarehouse,
            amountStorehouse: item.amountStorehouse,
            unit: item.unit,
            expiryDate: item.expiryDate,
            place: item.place,
            price: item.price
          }));
        });

      let medTuple:[number, number, Medicine[]] = [currentPage, totalCount, medicines];
      return medTuple;
    });

  }

}
