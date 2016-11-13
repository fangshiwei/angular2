/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DemoFormWithValidationsExplicitComponent } from './demo-form-with-validations-explicit.component';

describe('DemoFormWithValidationsExplicitComponent', () => {
  let component: DemoFormWithValidationsExplicitComponent;
  let fixture: ComponentFixture<DemoFormWithValidationsExplicitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoFormWithValidationsExplicitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoFormWithValidationsExplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
