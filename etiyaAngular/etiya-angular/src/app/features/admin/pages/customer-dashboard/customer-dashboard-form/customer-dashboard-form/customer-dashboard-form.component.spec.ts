import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDashboardFormComponent } from './customer-dashboard-form.component';

describe('CustomerDashboardFormComponent', () => {
  let component: CustomerDashboardFormComponent;
  let fixture: ComponentFixture<CustomerDashboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDashboardFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDashboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
