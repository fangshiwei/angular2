/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemoFormWithCustomValidationsComponent } from './demo-form-with-custom-validations.component';

describe('DemoFormWithCustomValidationsComponent', () => {
  let component: DemoFormWithCustomValidationsComponent;
  let fixture: ComponentFixture<DemoFormWithCustomValidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormWithCustomValidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormWithCustomValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
