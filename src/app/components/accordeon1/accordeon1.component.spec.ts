import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Accordeon1Component } from './accordeon1.component';

describe('Accordeon1Component', () => {
  let component: Accordeon1Component;
  let fixture: ComponentFixture<Accordeon1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Accordeon1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Accordeon1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
