import { Injectable } from '@angular/core';
import { Participant } from '../types/participant';
@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  constructor() { }

  private participants: Participant[] = [
    new Participant('שרה', 'כהן', '050-1234567', 1, 100, true, 'sara@gmail.com', 'password1'),
    new Participant('רבקה', 'לוי', '050-7654321', 2, 120, false, 'rivka@gmail.com', 'password2'),
    new Participant('לאה', 'מזרחי', '052-1122334', 3, 90, true, 'lea@gmail.com', 'password3'),
    new Participant('חנה', 'ישראלי', '054-9988776', 4, 110, false, 'hana@gmail.com', 'password4'),
    new Participant('אסתר', 'ברקוביץ', '053-4433221', 5, 100, true, 'esther@gmail.com', 'password5'),
    new Participant('מרים', 'גרוס', '050-5566778', 6, 95, true, 'miriam@gmail.com', 'password6'),
    new Participant('דבורה', 'פרידמן', '050-3344556', 7, 80, false, 'dvorah@gmail.com', 'password7'),
    new Participant('יהודית', 'רוזנברג', '052-6677889', 8, 110, true, 'yehudith@gmail.com', 'password8'),
    new Participant('שושנה', 'הרשקוביץ', '054-2244668', 9, 70, true, 'shoshana@gmail.com', 'password9'),
    new Participant('חיה', 'בלוך', '053-9988776', 10, 130, false, 'chaya@gmail.com', 'password10'),
    new Participant('מיכל', 'כץ', '050-1122113', 11, 100, true, 'michal@gmail.com', 'password11'),
    new Participant('רות', 'גולדשטיין', '052-3344556', 12, 120, true, 'ruth@gmail.com', 'password12'),
    new Participant('אפרת', 'שפירא', '054-5566778', 13, 105, false, 'efrat@gmail.com', 'password13'),
    new Participant('טובה', 'וייס', '053-8899776', 14, 115, true, 'tova@gmail.com', 'password14'),
    new Participant('דינה', 'רבינוביץ', '050-4433221', 15, 125, false, 'dina@gmail.com', 'password15'),
    new Participant('גילה', 'מרקוביץ', '052-6677889', 16, 90, true, 'gila@gmail.com', 'password16'),
    new Participant('נעמי', 'קליין', '054-1122334', 17, 80, true, 'naomi@gmail.com', 'password17'),
    new Participant('מלכה', 'שמיר', '053-2244668', 18, 85, false, 'malka@gmail.com', 'password18'),
    new Participant('צביה', 'קורן', '050-5566778', 19, 70, true, 'tzvia@gmail.com', 'password19'),
    new Participant('אלישבע', 'ליפשיץ', '052-9988776', 20, 140, true, 'elishva@gmail.com', 'password20'),
    new Participant('יעל', 'אליצור', '054-3344556', 21, 100, false, 'yael@gmail.com', 'password21'),
    new Participant('דסי', 'פלדמן', '053-5566778', 22, 95, true, 'dasi@gmail.com', 'password22'),
    new Participant('חדוה', 'ברמן', '050-8899776', 23, 110, true, 'hadva@gmail.com', 'password23'),
    new Participant('אילה', 'כהנוב', '052-4433221', 24, 125, false, 'aila@gmail.com', 'password24'),
    new Participant('רחל', 'שטרן', '054-6677889', 25, 130, true, 'rachel@gmail.com', 'password25'),
    new Participant('חני', 'גולדמן', '053-1122334', 26, 115, true, 'hani@gmail.com', 'password26'),
    new Participant('ציפי', 'אדלר', '050-2244668', 27, 120, false, 'tzipi@gmail.com', 'password27'),
    new Participant('ברכה', 'לנדאו', '052-5566778', 28, 105, true, 'bracha@gmail.com', 'password28'),
    new Participant('אסנת', 'שפיגל', '054-9988776', 29, 110, true, 'asnat@gmail.com', 'password29'),
    new Participant('אורה', 'ברנשטיין', '053-3344556', 30, 140, false, 'ora@gmail.com', 'password30'),
  ];

  getParticipants(): Participant[] {
    return this.participants;
  }

 
}

