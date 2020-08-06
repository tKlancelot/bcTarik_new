import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageLoginComponent } from './garage-login.component';

describe('GarageLoginComponent', () => {
  let component: GarageLoginComponent;
  let fixture: ComponentFixture<GarageLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
