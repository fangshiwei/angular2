import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { MedicineComponent } from './medicine/medicine.component';
import { StorehouseComponent } from './storehouse/storehouse.component';
import { WarehouseComponent } from './warehouse/warehouse.component';


export const mainRoutes: Routes = [
    {path: '', component: MainComponent},
    {path: 'medicine', component: MedicineComponent},
    {path: 'storehouse', component: StorehouseComponent},
    {path: 'warehouse', component: WarehouseComponent}
];

// export const mainRouting: ModuleWithProviders = RouterModule.forChild(mainRoutes);