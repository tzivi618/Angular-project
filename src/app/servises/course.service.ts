import { Injectable } from '@angular/core';
import { Course } from '../types/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courseList: Course[] = [
    new Course(1, "יוגה למתחילים", 1, 12, 300, "קורס יוגה להרפיה והתחזקות", new Date(2025, 6, 10), "ראשון", "18:00"),
    new Course(2, "פילאטיס מתקדמים", 2, 15, 400, "אימון פילאטיס למתקדמים", new Date(2025, 7, 8), "שני", "19:00"),
    new Course(3, "זומבה", 3, 10, 250, "אימון כושר בקצב הריקוד", new Date(2025, 6, 9), "שני", "20:00"),
    new Course(4, "אירובי", 4, 8, 200, "אימון אירובי לשריפת קלוריות", new Date(2025, 4, 15), "רביעי", "17:00"),
    new Course(6, "אימון כושר אישי", 6, 10, 500, "אימון כושר ממוקד אישי", new Date(2025, 4, 17), "ראשון", "21:00"),
    new Course(7, "חוג יציבה נכונה", 7, 10, 300, "קורס לשיפור היציבה", new Date(2025, 4, 18), "שני", "17:00"),
    new Course(8, "אומנות לחימה לנשים", 8, 15, 450, "קורס אומנות לחימה לנשים", new Date(2025, 4, 19), "שלישי", "18:00"),
    new Course(9, "חוג ריצה", 9, 8, 200, "קורס ריצה בקבוצה", new Date(2025, 4, 20), "רביעי", "07:00"),
    new Course(10, "חוג שחייה", 10, 12, 400, "קורס שחייה לנשים בלבד", new Date(2025, 4, 21), "חמישי", "08:00"),
    new Course(11, "חוג תזונה בריאה", 11, 6, 150, "קורס תזונה בריאה", new Date(2025, 4, 22), "ראשון", "19:00"),
    new Course(12, "חוג פילאטיס לנשים", 12, 10, 350, "קורס פילאטיס מותאם לנשים", new Date(2025, 4, 23), "שני", "20:00"),
    new Course(13, "חוג יוגה לנשים", 13, 12, 300, "קורס יוגה מותאם לנשים", new Date(2025, 4, 24), "שלישי", "18:30"),
    new Course(14, "חוג כושר קבוצתי", 14, 8, 250, "קורס כושר בקבוצה", new Date(2025, 4, 25), "רביעי", "19:00"),
    new Course(15, "חוג חיזוק שרירים", 15, 10, 400, "קורס לחיזוק שרירים", new Date(2025, 4, 26), "חמישי", "20:00"),
    new Course(16, "חוג ריקודי עם", 16, 8, 200, "קורס ריקודי עם לנשים", new Date(2025, 4, 27), "ראשון", "16:00"),
    new Course(17, "חוג כושר לנערות", 17, 10, 300, "קורס כושר מותאם לנערות", new Date(2025, 4, 28), "שני", "17:30"),
    new Course(18, "חוג קיקבוקסינג", 18, 12, 450, "קורס קיקבוקסינג לנשים", new Date(2025, 4, 29), "שלישי", "18:00"),
    new Course(20, "חוג כושר לנשים", 20, 12, 400, "קורס כושר מותאם לנשים", new Date(2022, 5, 1), "חמישי", "20:00"),
  ];

  constructor() { }
  getCourses(): Course[] {
    return this.courseList;
  }
  getCourseById(id: number): Course | undefined {
    return this.courseList.find(course => course.id === id);
  }
  

}
