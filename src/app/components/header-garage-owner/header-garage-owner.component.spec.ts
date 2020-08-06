import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGarageOwnerComponent } from './header-garage-owner.component';

describe('HeaderGarageOwnerComponent', () => {
  let component: HeaderGarageOwnerComponent;
  let fixture: ComponentFixture<HeaderGarageOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderGarageOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderGarageOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
