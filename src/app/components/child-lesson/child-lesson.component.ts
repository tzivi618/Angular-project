import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../types/course';
import { DatePipe, NgClass } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-lesson',
  standalone: true,
  imports: [ CommonModule,NgClass],
  templateUrl: './child-lesson.component.html',
  styleUrl: './child-lesson.component.css',
  providers: [DatePipe]
})
export class ChildLessonComponent implements OnInit {
  ngOnInit(): void {
    if (typeof this.courseDetails.startDate === 'string') {
      this.courseDetails.startDate = new Date(this.courseDetails.startDate);
    }
  }
  today: number = Date.now();
  constructor(private datePipe: DatePipe) { }
  @Input() courseDetails!: Course;

  transformDate(date: Date): string | null {
  
    return this.datePipe.transform(date, 'dd-MM-yy');
  }

}
