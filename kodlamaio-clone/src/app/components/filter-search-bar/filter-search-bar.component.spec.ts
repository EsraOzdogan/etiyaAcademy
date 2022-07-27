import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterSearchBarComponent } from './filter-search-bar.component';

describe('FilterSearchBarComponent', () => {
  let component: FilterSearchBarComponent;
  let fixture: ComponentFixture<FilterSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
