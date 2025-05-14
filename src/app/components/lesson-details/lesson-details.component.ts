
import { ChangeDetectionStrategy, Component, Inject, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

import { Participant } from '../../types/participant';
import { Course } from '../../types/course';
import { CourseService } from '../../servises/course.service';
import { TeamService } from '../../servises/team.service';
export class DialogElementsExample {
  readonly dialog = inject(MatDialog);
}
@Component({
  selector: 'app-lesson-details',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.css'
})
export class LessonDetailsComponent implements OnInit {
  lessonID!: number;
  detail!: string;
  myCourse!: Course|undefined;
  teacherName!: string|undefined;
error: any;
  constructor(public courses: CourseService, public teachers: TeamService, @Inject(MAT_DIALOG_DATA) public data: { lessonNumber: number }) {}

  ngOnInit(): void {

    this.lessonID = this.data.lessonNumber;
    console.log('Lesson ID:', this.lessonID);
    this.myCourse = this.courses.getCourseById(this.lessonID);
     if (!this.myCourse) {
      alert("שגיאה במערכת");
      this.error=true;
      return;
    }
    this.teacherName = this.teachers.getTeamNameById(this.myCourse.teacherID);
    if (!this.teacherName) {
      alert("שגיאה במערכת");
      this.error=true;
      return;
    }
   }
}
