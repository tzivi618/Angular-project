import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../servises/course.service';
import { Course } from '../../types/course';
import { ChildLessonComponent } from '../child-lesson/child-lesson.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-lessons',
  standalone: true,
  imports: [ChildLessonComponent,NgFor],
  templateUrl: './lessons.component.html',
  styleUrl: './lessons.component.css'
})
export class LessonsComponent implements OnInit {
  constructor(private coureseService: CourseService) { }
  allCourses: Course[] = [];
  ngOnInit(): void {
    this.allCourses = this.coureseService.getCourses();
    console.log(this.allCourses);
  }


}
