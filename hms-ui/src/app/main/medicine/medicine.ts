export class Medicine {
    medId: string;
    name: string;
    type: string;
    amountWarehouse: number; 
    amountStorehouse: number;
    unit: string;
    expiryDate: Date;
    place: string;
    price: number;

    constructor(obj?:any){
        this.medId = obj && obj.medId || null;
        this.name = obj && obj.name || null;
        this.type = obj && obj.type || null;
        this.amountWarehouse = obj && obj.amountWarehouse || null;
        this.amountStorehouse = obj && obj.amountStorehouse || null;
        this.unit = obj && obj.unit || null;
        this.expiryDate = obj && obj.expiryDate || null;
        this.place = obj && obj.place || null;
        this.price = obj && obj.price || null;
    }
}
