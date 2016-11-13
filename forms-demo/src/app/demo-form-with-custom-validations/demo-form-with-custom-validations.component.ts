import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

import {DemoSkuValidators } from './demo-sku-validators';




// function skuValidator(control: FormControl): { [s: string]: boolean } {
//   if (!control.value.match(/^123/)) {
//     return {invalidSku: true};
//   }
// }



@Component({
  selector: 'demo-form-with-custom-validations',
  templateUrl: './demo-form-with-custom-validations.component.html',
  styleUrls: ['./demo-form-with-custom-validations.component.css']
})
export class DemoFormWithCustomValidationsComponent implements OnInit {

  myForm: FormGroup;
  sku: AbstractControl;

  ngOnInit() {
  }

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku':  ['', Validators.compose([
        Validators.required, DemoSkuValidators.skuValidator])]
    });

    this.sku = this.myForm.controls['sku'];

    this.sku.valueChanges.subscribe(
      (value:string)=>{
        console.log('sku changed to: ', value);
      }
    );

    this.myForm.valueChanges.subscribe(
      (form:any)=>{
        console.log('form changed to: ', form);
      }
    );
  }

  onSubmit(value: string): void {
    console.log('you submitted value: ', value);
  }

}



