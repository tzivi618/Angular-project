export class Participant {
  constructor(
    public firstName: string,
    public lastName: string,
    public phone: string,
    public lessonNumber: number,
    public price: number,
    public isPaid: boolean,
    public email: string,
    public password: string
  ) { }
}

