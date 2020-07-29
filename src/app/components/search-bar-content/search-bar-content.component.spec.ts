import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarContentComponent } from './search-bar-content.component';

describe('SearchBarContentComponent', () => {
  let component: SearchBarContentComponent;
  let fixture: ComponentFixture<SearchBarContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
