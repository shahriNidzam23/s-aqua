import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhPage } from './ph.page';

describe('PhPage', () => {
  let component: PhPage;
  let fixture: ComponentFixture<PhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
