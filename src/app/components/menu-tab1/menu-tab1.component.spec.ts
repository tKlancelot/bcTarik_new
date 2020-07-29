import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTab1Component } from './menu-tab1.component';

describe('MenuTab1Component', () => {
  let component: MenuTab1Component;
  let fixture: ComponentFixture<MenuTab1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTab1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTab1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
