import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { MedicineComponent } from './medicine/medicine.component';
import { StorehouseComponent } from './storehouse/storehouse.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { MedicineService } from './medicine/medicine.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule
  ],
  declarations: [
    MainComponent, 
    MedicineComponent, 
    StorehouseComponent, 
    WarehouseComponent
  ],
  providers:[
    { provide: MedicineService, useClass: MedicineService }
  ]
})
export class MainModule { }
