import { Injectable } from '@angular/core';

  import { Team } from "../types/team";
import { Role } from  "../types/team";

@Injectable({
  providedIn: 'root'
})
export class TeamService {


  constructor() { }

  private teamData: Team[] = [
    new Team("רבקה", "לוי", 1, "0501234567", "r@gmail.com", "111111", Role.TEACHER),
    new Team("שרה", "כהן", 2, "0502345678", "sara.cohen@gmail.com", "Sara456!", Role.TEACHER),
    new Team("חנה", "מזרחי", 3, "0503456789", "hana.mizrahi@gmail.com", "Hana789!", Role.TEACHER),
    new Team("דבורה", "פרידמן", 4, "0504567890", "devora.friedman@gmail.com", "Devora101!", Role.TEACHER),
    new Team("אסתר", "כץ", 5, "0505678901", "ester.katz@gmail.com", "Ester202!", Role.TEACHER),
    new Team("מרים", "רוזנברג", 6, "0506789012", "miriam.rosenberg@gmail.com", "Miriam303!", Role.TEACHER),
    new Team("רחל", "גולדשטיין", 7, "0507890123", "rachel.goldstein@gmail.com", "Rachel404!", Role.TEACHER),
    new Team("לאה", "וייס", 8, "0508901234", "lea.weiss@gmail.com", "Lea505!", Role.TEACHER),
    new Team("יוכבד", "הלוי", 9, "0509012345", "yocheved.halevi@gmail.com", "Yocheved606!", Role.TEACHER),
    new Team("בת שבע", "גרין", 10, "0500123456", "bat.sheva.green@gmail.com", "BatSheva707!", Role.TEACHER),
    new Team("ציפורה", "בלום", 11, "0501234568", "zipora.blum@gmail.com", "Zipora808!", Role.TEACHER),
    new Team("חיה", "ברקוביץ", 12, "0502345679", "chaya.berkovich@gmail.com", "Chaya909!", Role.TEACHER),
    new Team("גולדה", "פישמן", 13, "0503456780", "golda.fishman@gmail.com", "Golda010!", Role.TEACHER),
    new Team("מלכה", "שטרן", 14, "0504567891", "malka.stern@gmail.com", "Malka111!", Role.TEACHER),
    new Team("ברכה", "ליפשיץ", 15, "0505678902", "bracha.lipshitz@gmail.com", "Bracha212!", Role.TEACHER),
    new Team("אפרת", "קליין", 16, "0506789013", "efrat.klein@gmail.com", "Efrat313!", Role.TEACHER),
    new Team("דינה", "שוורץ", 17, "0507890124", "dina.schwartz@gmail.com", "Dina414!", Role.TEACHER),
    new Team("רבקה", "יעקב", 18, "0508901235", "rivka.jacob@gmail.com", "Rivka515!", Role.SECRETARY),
    new Team("שרה", "לוי", 19, "0509012346", "sara.levi@gmail.com", "Sara616!", Role.SECRETARY),
    new Team("חנה", "כהן", 20, "0500123457", "g@gmail.com", "123456", Role.SECRETARY),
  ];

  login(email: string, password: string): Team | undefined {
    console.log('login', email,' ',password);
    return this.teamData.find(t => t.email === email && t.password === password);
  }

  getTeamById(id: number): Team | undefined {
    return this.teamData.find(t => t.id === id);
  }
  getAllTeams(): Team[] {
    return this.teamData;
  }
  getSecretaries(): Team[] {
    return this.teamData.filter(t => t.role === Role.SECRETARY);
  }
  getTeachers():Team[]{
    return this.teamData.filter(t=>t.role===Role.TEACHER);
  }
  getTeamNameById(id:number):string|undefined{
    let team: any = this.teamData.find(t => t.id === id);
    return team ? team.firstName + " " + team.lastName : undefined;
  }
}
