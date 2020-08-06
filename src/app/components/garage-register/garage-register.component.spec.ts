import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageRegisterComponent } from './garage-register.component';

describe('GarageRegisterComponent', () => {
  let component: GarageRegisterComponent;
  let fixture: ComponentFixture<GarageRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
