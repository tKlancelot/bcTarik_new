import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GarageOwnerComponent } from './garage-owner.component';

describe('GarageOwnerComponent', () => {
  let component: GarageOwnerComponent;
  let fixture: ComponentFixture<GarageOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GarageOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GarageOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
