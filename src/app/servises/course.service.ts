import { Injectable } from '@angular/core';
import { Course } from '../types/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courseList: Course[] = [

    new Course(1, "יוגה למתחילים", 1, 12, 300, "קורס יוגה להרפיה והתחזקות", new Date(2025, 5, 15), "ראשון", "18:00"),
    new Course(2, "פילאטיס מתקדמים", 2, 15, 400, "אימון פילאטיס למתקדמים", new Date(2025, 5, 15), "שני", "19:00"),
    new Course(3, "זומבה", 3, 10, 250, "אימון כושר בקצב הריקוד", new Date(2025, 5, 15), "שלישי", "20:00"),
    new Course(4, "אירובי", 4, 8, 200, "אימון אירובי לשריפת קלוריות", new Date(2025, 5, 15), "רביעי", "17:00"),
    new Course(5, "טאקוונדו", 5, 20, 600, "קורס אמנויות לחימה", new Date(2025, 5, 15), "חמישי", "18:30"),
    new Course(6, "מדיטציה", 6, 6, 150, "קורס להרפיה וחשיבה חיובית", new Date(2025, 5, 15), "שישי", "08:00"),
    new Course(7, "אימון כושר אישי", 7, 10, 500, "אימון כושר ממוקד אישי", new Date(2025, 5, 17), "מוצאי שבת", "21:00"),
  ]

  constructor() { }
  getCourses(): Course[] {
    return this.courseList;
  }
  getCourseById(id: number): Course | undefined {
    return this.courseList.find(course => course.id === id);
  }
  

}
