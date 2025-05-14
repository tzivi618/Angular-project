export class Participant {
  constructor(
    public firstName: string,
    public lastName: string,
    public phone: string,
    public idNumber: string,
    public lessonNumber: number,
    public price: number,
    public isPaid: boolean,
    public password: string,
    public email: string
  ) { }
}

