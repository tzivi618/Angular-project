import { Injectable } from '@angular/core';
  import { Team } from "../types/team";
import { Role } from  "../types/team";
@Injectable({
  providedIn: 'root'
})
export class TeamService {


private  TeamData: Team[] = [
    new Team("רבקה", "לוי", "1", "0501234567", "rivka.levi@gmail.com", "Rivka123!", Role.TEACHER),
    new Team("שרה", "כהן", "2", "0502345678", "sara.cohen@gmail.com", "Sara456!", Role.TEACHER),
    new Team("חנה", "מזרחי", "3", "0503456789", "hana.mizrahi@gmail.com", "Hana789!", Role.TEACHER),
    new Team("דבורה", "פרידמן", "4", "0504567890", "devora.friedman@gmail.com", "Devora101!", Role.TEACHER),
    new Team("אסתר", "כץ", "5", "0505678901", "ester.katz@gmail.com", "Ester202!", Role.TEACHER),
    new Team("מרים", "רוזנברג", "6", "0506789012", "miriam.rosenberg@gmail.com", "Miriam303!", Role.TEACHER),
    new Team("רחל", "גולדשטיין", "7", "0507890123", "rachel.goldstein@gmail.com", "Rachel404!", Role.TEACHER),
    new Team("לאה", "וייס", "8", "0508901234", "lea.weiss@gmail.com", "Lea505!", Role.TEACHER),
    new Team("יוכבד", "הלוי", "9", "0509012345", "yocheved.halevi@gmail.com", "Yocheved606!", Role.TEACHER),
    new Team("בת שבע", "גרין", "10", "0500123456", "bat.sheva.green@gmail.com", "BatSheva707!", Role.TEACHER),
    new Team("ציפורה", "בלום", "11", "0501234568", "zipora.blum@gmail.com", "Zipora808!", Role.TEACHER),
    new Team("חיה", "ברקוביץ", "12", "0502345679", "chaya.berkovich@gmail.com", "Chaya909!", Role.TEACHER),
    new Team("גולדה", "פישמן", "13", "0503456780", "golda.fishman@gmail.com", "Golda010!", Role.TEACHER),
    new Team("מלכה", "שטרן", "14", "0504567891", "malka.stern@gmail.com", "Malka111!", Role.TEACHER),
    new Team("ברכה", "ליפשיץ", "15", "0505678902", "bracha.lipshitz@gmail.com", "Bracha212!", Role.TEACHER),
    new Team("אפרת", "קליין", "16", "0506789013", "efrat.klein@gmail.com", "Efrat313!", Role.TEACHER),
    new Team("דינה", "שוורץ", "17", "0507890124", "dina.schwartz@gmail.com", "Dina414!", Role.TEACHER),
    new Team("רבקה", "יעקב", "18", "0508901235", "rivka.jacob@gmail.com", "Rivka515!", Role.SECRETARY),
    new Team("שרה", "לוי", "19", "0509012346", "sara.levi@gmail.com", "Sara616!", Role.SECRETARY),
    new Team("חנה", "כהן", "20", "0500123457", "hana.cohen@gmail.com", "Hana717!", Role.SECRETARY),
];
  constructor() { 
  }

  login(Email: string, Password: string): Team | undefined | null{
    if (!Email || !Password) {
      return undefined;
    }
    return this.TeamData.find(p => p.email === Email && p.password === Password);
  }
}
