import { FormControl } from '@angular/forms';

export class DemoSkuValidators {
    static skuValidator(c: FormControl):{[s:string]: boolean}{
        if(!c.value.match(/^123/)){
            return {invalidSku: true};
        }
    }
}