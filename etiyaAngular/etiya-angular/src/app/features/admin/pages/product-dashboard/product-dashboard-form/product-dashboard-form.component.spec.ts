import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDashboardFormComponent } from './product-dashboard-form.component';

describe('ProductDashboardFormComponent', () => {
  let component: ProductDashboardFormComponent;
  let fixture: ComponentFixture<ProductDashboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDashboardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDashboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
