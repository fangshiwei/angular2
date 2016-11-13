import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DemoFormSkuComponent } from './demo-form-sku/demo-form-sku.component';
import { DemoFormSkuBuilderComponent } from './demo-form-sku-builder/demo-form-sku-builder.component';
import { DemoFormWithValidationsExplicitComponent } from './demo-form-with-validations-explicit/demo-form-with-validations-explicit.component';
import { DemoFormWithCustomValidationsComponent } from './demo-form-with-custom-validations/demo-form-with-custom-validations.component';
import { DemoFormNgModelComponent } from './demo-form-ng-model/demo-form-ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoFormSkuComponent,
    DemoFormSkuBuilderComponent,
    DemoFormWithValidationsExplicitComponent,
    DemoFormWithCustomValidationsComponent,
    DemoFormNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
