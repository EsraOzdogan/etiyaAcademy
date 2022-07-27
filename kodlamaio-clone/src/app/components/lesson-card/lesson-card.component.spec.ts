import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonCardComponent } from './lesson-card.component';

describe('LessonCardComponent', () => {
  let component: LessonCardComponent;
  let fixture: ComponentFixture<LessonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LessonCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
