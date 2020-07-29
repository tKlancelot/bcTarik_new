import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDown1Component } from './drop-down1.component';

describe('DropDown1Component', () => {
  let component: DropDown1Component;
  let fixture: ComponentFixture<DropDown1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropDown1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDown1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
