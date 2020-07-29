import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jumbo1Component } from './jumbo1.component';

describe('Jumbo1Component', () => {
  let component: Jumbo1Component;
  let fixture: ComponentFixture<Jumbo1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jumbo1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jumbo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
