import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaltarikComponent } from './modaltarik.component';

describe('ModaltarikComponent', () => {
  let component: ModaltarikComponent;
  let fixture: ComponentFixture<ModaltarikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModaltarikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModaltarikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
