import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddAdvertComponent } from './form-add-advert.component';

describe('FormAddAdvertComponent', () => {
  let component: FormAddAdvertComponent;
  let fixture: ComponentFixture<FormAddAdvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAddAdvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAddAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
