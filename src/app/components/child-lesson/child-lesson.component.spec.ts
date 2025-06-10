import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLessonComponent } from './child-lesson.component';

describe('ChildLessonComponent', () => {
  let component: ChildLessonComponent;
  let fixture: ComponentFixture<ChildLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildLessonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
