import { Injectable } from '@angular/core';
import { Participant } from '../types/participant';
@Injectable({
  providedIn: 'root'
})
export class UsersListService {

  constructor() { }

  private participants: Participant[] = [
    new Participant('שרה', 'כהן', '050-1234567', '123456789', 1, 100, true, 'sara@gmail.com', 'password1'),
    new Participant('רבקה', 'לוי', '050-7654321', '987654321', 2, 120, false, 'rivka@gmail.com', 'password2'),
    new Participant('לאה', 'מזרחי', '052-1122334', '456789123', 3, 90, true, 'lea@gmail.com', 'password3'),
    new Participant('חנה', 'ישראלי', '054-9988776', '321654987', 4, 110, false, 'hana@gmail.com', 'password4'),
    new Participant('אסתר', 'ברקוביץ', '053-4433221', '789123456', 5, 100, true, 'esther@gmail.com', 'password5'),
    new Participant('מרים', 'גרוס', '050-5566778', '258963147', 6, 95, true, 'miriam@gmail.com', 'password6'),
    new Participant('דבורה', 'פרידמן', '050-3344556', '852741963', 7, 80, false, 'dvorah@gmail.com', 'password7'),
    new Participant('יהודית', 'רוזנברג', '052-6677889', '147852369', 8, 110, true, 'yehudith@gmail.com', 'password8'),
    new Participant('שושנה', 'הרשקוביץ', '054-2244668', '369852147', 9, 70, true, 'shoshana@gmail.com', 'password9'),
    new Participant('חיה', 'בלוך', '053-9988776', '741258963', 10, 130, false, 'chaya@gmail.com', 'password10'),
    new Participant('מיכל', 'כץ', '050-1122113', '963258741', 11, 100, true, 'michal@gmail.com', 'password11'),
    new Participant('רות', 'גולדשטיין', '052-3344556', '357951852', 12, 120, true, 'ruth@gmail.com', 'password12'),
    new Participant('אפרת', 'שפירא', '054-5566778', '951357852', 13, 105, false, 'efrat@gmail.com', 'password13'),
    new Participant('טובה', 'וייס', '053-8899776', '159357486', 14, 115, true, 'tova@gmail.com', 'password14'),
    new Participant('דינה', 'רבינוביץ', '050-4433221', '753159846', 15, 125, false, 'dina@gmail.com', 'password15'),
    new Participant('גילה', 'מרקוביץ', '052-6677889', '852963741', 16, 90, true, 'gila@gmail.com', 'password16'),
    new Participant('נעמי', 'קליין', '054-1122334', '369147852', 17, 80, true, 'naomi@gmail.com', 'password17'),
    new Participant('מלכה', 'שמיר', '053-2244668', '741963258', 18, 85, false, 'malka@gmail.com', 'password18'),
    new Participant('צביה', 'קורן', '050-5566778', '258147963', 19, 70, true, 'tzvia@gmail.com', 'password19'),
    new Participant('אלישבע', 'ליפשיץ', '052-9988776', '963258147', 20, 140, true, 'elishva@gmail.com', 'password20'),
    new Participant('יעל', 'אליצור', '054-3344556', '753456159', 21, 100, false, 'yael@gmail.com', 'password21'),
    new Participant('דסי', 'פלדמן', '053-5566778', '852147369', 22, 95, true, 'dasi@gmail.com', 'password22'),
    new Participant('חדוה', 'ברמן', '050-8899776', '951753456', 23, 110, true, 'hadva@gmail.com', 'password23'),
    new Participant('אילה', 'כהנוב', '052-4433221', '147963852', 24, 125, false, 'aila@gmail.com', 'password24'),
    new Participant('רחל', 'שטרן', '054-6677889', '753159456', 25, 130, true, 'rachel@gmail.com', 'password25'),
    new Participant('חני', 'גולדמן', '053-1122334', '258753159', 26, 115, true, 'hani@gmail.com', 'password26'),
    new Participant('ציפי', 'אדלר', '050-2244668', '147852753', 27, 120, false, 'tzipi@gmail.com', 'password27'),
    new Participant('ברכה', 'לנדאו', '052-5566778', '456159753', 28, 105, true, 'bracha@gmail.com', 'password28'),
    new Participant('אסנת', 'שפיגל', '054-9988776', '159753456', 29, 110, true, 'asnat@gmail.com', 'password29'),
    new Participant('אורה', 'ברנשטיין', '053-3344556', '753456951', 30, 140, false, 'ora@gmail.com', 'password30'),
  ];

  getParticipants(): Participant[] {
    return this.participants;
  }

  getPaticipantsById(id: string): Participant | undefined {
    return this.participants.find(p => p.idNumber === id);
  }
}

