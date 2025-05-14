import { Component, Input } from '@angular/core';
import { Course } from '../../types/course';

@Component({
  selector: 'app-child-lesson',
  imports: [],
  templateUrl: './child-lesson.component.html',
  styleUrl: './child-lesson.component.css'
})
export class ChildLessonComponent {
  @Input() courseDetails!:Course;

  
}
