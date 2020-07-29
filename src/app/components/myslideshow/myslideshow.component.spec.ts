import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyslideshowComponent } from './myslideshow.component';

describe('MyslideshowComponent', () => {
  let component: MyslideshowComponent;
  let fixture: ComponentFixture<MyslideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyslideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyslideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
