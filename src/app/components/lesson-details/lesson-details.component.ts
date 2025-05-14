import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
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

  // openDialog() {
  //   this.dialog.open(DialogElementsExampleDialog);
  // }
}
@Component({
  selector: 'app-lesson-details',
  standalone: true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule],
  templateUrl: './lesson-details.component.html',
  styleUrl: './lesson-details.component.css'
})
export class LessonDetailsComponent implements OnInit {
  lessonID: number = 0;
  constructor(public courses: CourseService, public teachers: TeamService) {

  }
  ngOnInit(): void { }
  onClick() {
    let MyCourse: any = this.courses.getCourseById(this.lessonID);
    let teamName:any = this.teachers.getTeamNameById(MyCourse.teacherID);
    if (!teamName) {
      alert("שגיאה במערכת");
      return;
    }
    alert("שיעור " + MyCourse.name + " יתקיים ביום " + MyCourse.dayOfWeek + " בשעה " + MyCourse.startTime + " עם המדריך " + teamName);
  }

}
